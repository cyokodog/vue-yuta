export default (xAxisCategories, series) => {
  return {
    chart: {
      type: 'bar'
    },
    title: false,
    xAxis: {
      categories: xAxisCategories,
      title: {
        text: null
      },
      labels: {
        style: {color: '#000', 'font-size': '14px'}
      }
    },
    yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
        text: 'Count',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' count'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: 0,
      y: 0,
      backgroundColor: '#fafafa',
      shadow: true
    },
    credits: {
      enabled: false
    },
    series
  }
}
