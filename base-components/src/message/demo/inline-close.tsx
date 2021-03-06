/**
 * @title 可关闭组件
 * @description 通过增加`closeable`属性可以控制提示框是否可关闭。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message } from '@alife/alicloud-components'

const onClose = () => console.log('onClose triggered!')
const afterClose = () => console.log('afterClose triggered!')

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Message
          title="title"
          closeable
          onClose={onClose}
          afterClose={afterClose}
        >
          Content Content Content Content
        </Message>
      </div>
    </Style>
  )
}
const Style = styled.div``
