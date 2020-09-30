/**
 * @title 自定义样式
 * @description 使用 style 和 className 来定义样式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Notification, Button } from '@alife/alicloud-components'

const openNotification = () => {
  Notification.open({
    title: 'Notification Title',
    content:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: 600,
      marginLeft: -225
    }
  })
}

export default function DemoComponent() {
  return (
    <Style>
      <Button type="primary" onClick={openNotification}>
        Open Notification
      </Button>
    </Style>
  )
}
const Style = styled.div``
