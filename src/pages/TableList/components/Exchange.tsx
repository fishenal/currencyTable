import React, { useState } from 'react'
import { Modal, Input } from 'antd'
import { connect, Dispatch } from 'umi'
import { getFields } from '@/pages/Settings'
import moment from 'moment'
import { pattern } from '@/utils/utils'
import { ConnectState } from '@/models/connect'

const Exchange: React.FC<{
  dispatch: Dispatch;
  isShowExchange: boolean;
  selectRow: { currency: string; [key: string]: string | number};
}> = ({ dispatch, isShowExchange, selectRow }) => {
  const [currentVal, setCurrentVal] = useState(1)
  const { base } = getFields()
  const targetCurrency = selectRow.currency
  const dateStr = moment().subtract(1, 'days').format(pattern)
  const currentRate = selectRow[dateStr] as number || 1

  const hide = () => {
    dispatch({
      type: 'tableList/toggleExchange',
      paylod: false
    })
  }

  const onValChange = (e: any) => {
    setCurrentVal(e.target.value)
  }

  return <Modal
    title="Exchange"
    visible={isShowExchange}
    onCancel={hide}
    onOk={hide}
  >
    <Input suffix={base} value={currentVal} onChange={onValChange}/>
    = { currentRate * currentVal } {targetCurrency}
  </Modal>
};

export default connect(({ tableList }: ConnectState) => ({
  isShowExchange: tableList.isShowExchange,
  selectRow: tableList.selectRow,
}))(Exchange);
