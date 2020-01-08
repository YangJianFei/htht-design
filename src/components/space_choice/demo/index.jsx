import React from 'react'
import { Form, InputNumber } from 'antd'
import NoGetFieldDecorator from '../../form_valid/no_getFieldDecorator'

function SpaceChoice(props) {
  const { form } = props
  const { getFieldDecorator } = form

  // 没传getFieldDecorator的话警告，getFieldDecorator必传
  if (!getFieldDecorator) {
    return <NoGetFieldDecorator />
  }
  return (
    <div className="htht-space-choice htht-space-choice-two-line">
      <span className="title">空间选择：</span>
      <div className="item">
        <span className="sub-title">
          <i>经度</i>
        </span>
        <Form.Item>
          {getFieldDecorator('minLong', {
            rules: [{ required: true, message: '请输入最小经度！' }]
          })(
            <InputNumber placeholder="最小经度" min={-180} max={180} style={{ width: '1.4rem' }} />
          )}
        </Form.Item>
        <span className="gap">-</span>
        <Form.Item>
          {getFieldDecorator('maxLong', {
            rules: [{ required: true, message: '请输入最大经度！' }]
          })(
            <InputNumber placeholder="最大经度" min={-180} max={180} style={{ width: '1.4rem' }} />
          )}
        </Form.Item>
      </div>

      <div className="item">
        <span className="sub-title">
          <i>纬度</i>
        </span>
        <Form.Item>
          {getFieldDecorator('minLat', {
            rules: [{ required: true, message: '请输入最小纬度！' }]
          })(<InputNumber placeholder="最小纬度" min={-90} max={90} style={{ width: '1.4rem' }} />)}
        </Form.Item>
        <span className="gap">-</span>
        <Form.Item>
          {getFieldDecorator('maxLat', {
            rules: [{ required: true, message: '请输入最大纬度！' }]
          })(<InputNumber placeholder="最大纬度" min={-90} max={90} style={{ width: '1.4rem' }} />)}
        </Form.Item>
      </div>
    </div>
  )
}

export default SpaceChoice
