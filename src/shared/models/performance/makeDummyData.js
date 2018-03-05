const data = [
  {
    name: 'トイレそうじ',
    date: '2018/02/25',
    type: 'good'
  },
  {
    name: '床みがき',
    date: '2018/03/05',
    type: 'good'
  },
  {
    name: 'カギのし忘れ',
    date: '2018/02/25',
    type: 'bad'
  },
  {
    name: 'カギのし忘れ',
    date: '2018/02/26',
    type: 'bad'
  },
  {
    name: 'カギのし忘れ',
    date: '2018/02/27',
    type: 'bad'
  },
  {
    name: 'カギのし忘れ',
    date: '2018/02/28',
    type: 'bad'
  },
  {
    name: 'カギのし忘れ',
    date: '2018/03/01',
    type: 'bad'
  },
  {
    name: 'エサの片付け忘れ',
    date: '2018/02/24',
    type: 'bad'
  },
  {
    name: 'エサの片付け忘れ',
    date: '2018/02/25',
    type: 'bad'
  },
  {
    name: 'エサの片付け忘れ',
    date: '2018/02/26',
    type: 'bad'
  },
  {
    name: 'エサの片付け忘れ',
    date: '2018/02/27',
    type: 'bad'
  },
  {
    name: 'エサの片付け忘れ',
    date: '2018/02/28',
    type: 'bad'
  },
  {
    name: '食後のテーブル拭き忘れ',
    date: '2018/02/26',
    type: 'bad'
  },
  {
    name: '食後のテーブル拭き忘れ',
    date: '2018/02/27',
    type: 'bad'
  },
  {
    name: '食後のテーブル拭き忘れ',
    date: '2018/02/28',
    type: 'bad'
  },
  {
    name: '食後のテーブル拭き忘れ',
    date: '2018/03/01',
    type: 'bad'
  },
  {
    name: 'ちこく',
    date: '2018/02/26',
    type: 'bad'
  },
  {
    name: 'ちこく',
    date: '2018/02/27',
    type: 'bad'
  },
  {
    name: 'ちこく',
    date: '2018/02/28',
    type: 'bad'
  }
]

export default (state) => {
  state.db.performances.ref.set(null)
  data.forEach(v => {
    state.db.performances.ref.push(v)
  })
}
