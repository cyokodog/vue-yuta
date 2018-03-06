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
    name: '漢検5級合格',
    date: '2018/03/04',
    type: 'good'
  },

  {
    name: '部屋のかたずけ忘れ',
    date: '2018/02/20',
    type: 'bad'
  },
  {
    name: '部屋のかたずけ忘れ',
    date: '2018/02/21',
    type: 'bad'
  },
  {
    name: 'うがい手洗い忘れ',
    date: '2018/02/22',
    type: 'bad'
  },
  {
    name: 'うがい手洗い忘れ',
    date: '2018/02/23',
    type: 'bad'
  },
  {
    name: '布団たたみ忘れ',
    date: '2018/02/24',
    type: 'bad'
  },
  {
    name: '上履き干し忘れ',
    date: '2018/02/24',
    type: 'bad'
  },
  {
    name: 'やる事やる前に遊ぶ',
    date: '2018/02/25',
    type: 'bad'
  },
  {
    name: '塾の後遊んで帰ってこない',
    date: '2018/03/01',
    type: 'bad'
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
    name: '寝坊してちこく',
    date: '2018/02/26',
    type: 'bad'
  },
  {
    name: '寝坊してちこく',
    date: '2018/03/02',
    type: 'bad'
  },
  {
    name: '寝坊してちこく',
    date: '2018/02/20',
    type: 'bad'
  }
]

export default (state) => {
  state.db.performances.ref.set(null)
  data.forEach(v => {
    state.db.performances.ref.push(v)
  })
}
