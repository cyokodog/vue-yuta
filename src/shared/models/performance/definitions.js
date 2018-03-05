import * as moment from 'moment'

export const chartColors = {
  default: '#ddd',
  bad: 'red',
  good: 'green'
}

export const db = {
  performances: {
    isReady: false,
    ref: firebase.database().ref('/performances'),
    values: null,
    items: null,
    summary: {
      good: null,
      bad: null
    },
    recently: {
      good: null,
      bad: null
    },
    monthlySummary: null,
    goodSummary: null,
    series: null
  }
}

export const addPerformance = (state, param) => {
  state.db.performances.isReady = false
  const item = {
    name: param.name,
    date: moment().format('YYYY/MM/DD'),
    type: param.type
  }
  state.db.performances.ref.push(item)
}

export const prepareDb = (state) => {
  state.db.performances.ref.on('value', (snapshot) => {
    const rawValues = snapshot.val()
    state.db.performances.values = rawValues
    const items = Object.keys(rawValues).map(key => rawValues[key])
    state.db.performances.items = items
    state.db.performances.summary.good = getMonthlySummary(items, 'good')
    state.db.performances.summary.bad = getMonthlySummary(items, 'bad')
    state.db.performances.recently.good = getRecentlyActions(items, 'good')
    state.db.performances.recently.bad = getRecentlyActions(items, 'bad')

    setTimeout(() => {
      state.db.performances.isReady = true
    }, 0)
  })
}

const getRecentlyActions = (rawItems, type) => {
  const itemMap = new Map()
  const begin = moment().startOf('month')
  Array.fill(Array(2)).forEach(_ => {
    const dateKey = begin.format('YYYY/MM')
    itemMap.set(dateKey, [])
    begin.subtract(1, 'months')
  })

  const items = rawItems.concat().sort((a, b) => a.date > b.date ? -1 : 1).filter(v => v.type === type)
  items.forEach(item => {
    const dateKey = moment(item.date, 'YYYY/MM/DD').startOf('month').format('YYYY/MM')
    const tmp = itemMap.get(dateKey)
    tmp.push(item)
  })

  const recently = []
  for (const [date, actions] of itemMap) {
    recently.push({
      date,
      actions,
      name: recently.length ? 'Last Month' : 'This Month'
    })
  }

  return recently
}

const getMonthlySummary = (rawItems, type) => {
  const currentMonth = moment().startOf('month')

  const itemMap = new Map()
  rawItems.forEach(item => {
    if (item.type !== type) {
      return
    }
    if (!itemMap.has(item.name)) {
      const initialMap = new Map()
      const begin = currentMonth.subtract(2, 'months')
      Array.fill(Array(2)).forEach(_ => {
        const dateKey = begin.add(1, 'months').format('YYYY/MM')
        initialMap.set(dateKey, 0)
      })
      itemMap.set(item.name, initialMap)
    }
    const valueMap = itemMap.get(item.name)
    const key = moment(item.date, 'YYYY/MM/DD').format('YYYY/MM')
    if (valueMap.has(key)) {
      const value = valueMap.get(key)
      valueMap.set(key, value + 1)
    }
    itemMap.set(item.name, valueMap)
  })

  const categories = Array.from(itemMap.keys()) || []
  const seriesMap = new Map()
  categories.forEach(category => {
    const valueMap = itemMap.get(category)
    for (const [dateKey, value] of valueMap) {
      if (!seriesMap.has(dateKey)) {
        seriesMap.set(dateKey, [])
      }
      const countArray = seriesMap.get(dateKey)
      countArray.push(value)
      seriesMap.set(dateKey, countArray)
    }
  })

  const series = []
  for (const [dateKey, countArray] of seriesMap) {
    const color = currentMonth.format('YYYY/MM') === dateKey ? chartColors[type] : chartColors.default
    series.push({
      name: dateKey,
      data: countArray,
      color: color
    })
  }

  return {
    categories,
    series
  }
}
