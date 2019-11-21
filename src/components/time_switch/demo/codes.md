```jsx
import React from 'react'
import { Form, DatePicker } from 'antd'

function HorizontalTimeChoice(props) {
  const { form } = props
  const { getFieldDecorator } = form

  return (
    <div className="htht-time-choice htht-time-choice-horizontal">
      <span className="title">时间选择：</span>
      <Form.Item>
        {getFieldDecorator('startTime', {
          rules: [{ required: true, message: '请输入开始时间！' }]
        })(
          <DatePicker
            showToday={false}
            format="YYYY-MM-DD"
            allowClear={false}
            style={{ width: '1.4rem' }}
          />
        )}
      </Form.Item>
      <span className="gap">-</span>
      <Form.Item>
        {getFieldDecorator('endTime', {
          rules: [{ required: true, message: '请输入结束时间！' }]
        })(
          <DatePicker
            showToday={false}
            format="YYYY-MM-DD"
            allowClear={false}
            style={{ width: '1.4rem' }}
          />
        )}
      </Form.Item>
    </div>
  )
}

export default Form.create({ name: 'time_choice_horizontal' })(HorizontalTimeChoice)
```
