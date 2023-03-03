import React from 'react'
import { CanvasJSChart } from 'canvasjs-react-charts'

function Chart() {
    const options = {
        animationEnabled: true,
        title: {
            text: "Step Tracker"
        },
        subtitles: [{
            text: " step 2314👣",
           
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Target Complite", y: 65 },
                { name: "Target Pending", y: 35 },
              
            ]
        }]
    }
    return (
    <div>
        <CanvasJSChart options = {options}
            /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
}



export default Chart