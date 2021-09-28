import React from 'react';
import '../Chart/Chart.css'
import ChartBar from './ChartBar';


const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); // this will return a new array which will contains numbers 
                                                                    // actually we are converting dataPoint objects to the number.
    const totalMaximum = Math.max(...dataPointValues);

    return( // as many chartBars Components as many datapoints we have
        <div className='chart'>
            {props.dataPoints.map(dataPoint => 
            <ChartBar
                key={dataPoint.label} // these are the values that this ChartBar component will recieve as parameters
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
             />)} 
        </div>
    );
}

export default Chart;