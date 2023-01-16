import React from 'react'
// import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      type: 'pie',
      data: [1, 2, 3]
    }]
  }

function Chart() {
    return (
        <div> 
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default Chart;