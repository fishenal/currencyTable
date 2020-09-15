import React from 'react'
import { Line } from '@ant-design/charts'
import { connect } from 'umi'
import { ConnectState } from '@/models/connect'

const constructData = (rawRow: {[key: string]: number | string})
: { date: string, value: string }[] | [] => {
  const result = [];
  Object.keys(rawRow).forEach(key => {
    if (key !== 'currency' && key !== 'key') {
      result.push({
        value: rawRow[key],
        date: key
      })
    }
  })
  return result
}

const Chart: React.FC<{ selectRow: any }> = ({ selectRow }) => {
  const chartData = constructData(selectRow);
  const config = {
    data: chartData,
    xField: 'date',
    yField: 'value',
    forceFit: true,
    point: {
      visible: true,
      size: 1,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 1,
      },
    },
  };
  return <Line {...config} />;
};

export default connect(({ tableList }: ConnectState) => ({
  selectRow: tableList.selectRow,
}))(Chart);
