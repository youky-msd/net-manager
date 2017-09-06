const getOptions = options => {
  return {
    backgroundColor: '#ffffff',
    title: {
      text: options.title || 'N/A',
      subtext: options.subtitle || '-',
      x: 'center',
      y: '35%',
      textStyle: {
        color: '#1F2D3D',
        fontSize: 16
      },
      subtextStyle: {
        color: '#99A9BF',
        fontSize: 14
      }
    },
    series: [{
      type: 'pie',
      radius: ['0%', '90%'],
      silent: true,
      label: {
        normal: {
          show: false
        }
      },
      data: [{
        value: 1,
        itemStyle: {
          normal: {
            color: '#ffffff',
            shadowBlur: 8,
            shadowColor: '#efefef'
          }
        }
      }],
      animation: true
    }, {
      type: 'pie',
      radius: ['73%', '78%'],
      silent: false,
      label: {
        normal: {
          show: false
        }
      },
      data: [{
        value: 1,
        itemStyle: {
          normal: {
            color: '#e6ebef'
          }
        }
      }],
      animation: false
    }, {
      name: 'main',
      type: 'pie',
      radius: ['72%', '78%'],
      silent: false,
      label: {
        normal: {
          show: false
        }
      },
      data: [{
        value: options.value || 0.7,
        itemStyle: {
          normal: {
            color: options.color
          }
        }
      }, {
        value: options.value ? (1 - options.value) : 0.3,
        itemStyle: {
          normal: {
            color: '#e6ebef'
          }
        }
      }],
      animation: true,
      animationType: 'slide',
      animationDuration: 5000
    }]
  }
}

export const initChart = (chart, options = {}) => {
  chart.setOption(getOptions(options))
}
