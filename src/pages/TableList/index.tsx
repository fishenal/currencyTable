import React, { useEffect } from 'react'
import { connect, Dispatch } from 'umi'
import { ConnectState } from '@/models/connect'
import { getFields } from '@/pages/Settings'
import { Table } from 'antd'
import Chart from './components/Chart'
import Exchange from './components/Exchange'

const TableList: React.FC<{
  dispatch: Dispatch;
  cols: Array<{}>;
  rowData: Array<{}>;
}> = ({ dispatch, cols, rowData }) => {
  useEffect(() => {
    dispatch({
      type: 'tableList/fetchCurrency',
    });
  }, [])

  const { base } = getFields();
  const rtOnRow = (record: {}) => {
    return {
      onClick: () => {
        dispatch({
          type: 'tableList/rowSelect',
          payload: {
            record
          }
        });
      },
      onDoubleClick: () => {
        dispatch({
          type: 'tableList/toggleExchange',
          payload: true
        })
      },
    }
  }
  return <>
    <p>Base: { base }</p>
    <Table 
      columns={cols} 
      dataSource={rowData} 
      style={{ width: '100%'}} 
      tableLayout="fixed"
      onRow={rtOnRow}
    />
    <Chart />
    <Exchange />
  </>
}

export default connect(({ tableList }: ConnectState) => ({
  cols: tableList.cols,
  rowData: tableList.rowData,
}))(TableList);