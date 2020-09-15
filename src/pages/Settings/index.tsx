import React, { useState } from 'react'
import { Form, Select, Checkbox, InputNumber, Button, notification } from 'antd'
import currencyNames from '@/utils/currencyNames'

export interface SettingFieldsType {
  period: number;
  base: string;
  symbols: string[];
}
const initFields = {
  period: 1,
  base: 'CNY',
  symbols: currencyNames
}
const localKey = 'currency_demo_setting_fields'
const saveFields = (fields: SettingFieldsType) => {
  window.localStorage.setItem(localKey, JSON.stringify(fields))
}
export const getFields = ():SettingFieldsType => {
  const fields = window.localStorage.getItem(localKey)
  return fields === null ? initFields : JSON.parse(fields)
}

const { Option } = Select;
const Settings: React.FC<> = () => {
  const [settingFields, setSettingFields] = useState(getFields())

  const onFinish = (fields: SettingFieldsType) => {
    setSettingFields(fields)
    saveFields(fields)
    notification.success({message: 'Saved!'})
    // dispatch({
    //   type: 'tableList/fetchCurrency',
    // });
  };

  return <Form
    onFinish = {onFinish}
    initialValues = {settingFields}
  >
      <Form.Item label="Auto refresh period">
        <Form.Item name="period" noStyle>
          <InputNumber min={1} max={30} />
        </Form.Item>
        <span className="ant-form-text"> minus </span>
      </Form.Item>
      <Form.Item
        name="base"
        label="Base currency"
      >
        <Select placeholder="Please select a base currency">
          {
            currencyNames.map(name => <Option value={name} key={name}>{name}</Option>)
          }
        </Select>
      </Form.Item>
      <Form.Item name="symbols" label="Currency List">
        <Checkbox.Group>
          {
            currencyNames.map(name => <Checkbox value={name} key={name}>{name}</Checkbox>)
          }
        </Checkbox.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
  </Form>
}

export default Settings;