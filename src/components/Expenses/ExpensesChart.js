import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = props => {

    const chartDataPoints = [ // these are the values that Chart component is expecting as props.(label and value)
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
      ];

      for (const expense of props.expenses) { // loop through all our expenses which we get via props. 

        const expenseMonth = expense.date.getMonth(); // then we wanna look at every expense, get month of that expense and 
                                                        // update the value of the apprpriate data point.
        chartDataPoints[expenseMonth].value += expense.amount; // sum up the value for given month expenses.

      }
 
    return (
        <Chart dataPoints={chartDataPoints}/> // set the props (dataPoints) in Chart Component with the updated chartDataPoints.
    );
};

export default ExpensesChart;   