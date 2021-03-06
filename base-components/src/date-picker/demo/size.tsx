/**
 * @title 不同尺寸
 * @description 通过 `size` 属性可以改变 Input 组件的尺寸，默认为 `medium`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <DatePicker size="large" /> &nbsp;&nbsp;
        <DatePicker /> &nbsp;&nbsp;
        <DatePicker size="small" />
      </div>
    </Style>
  )
}
const Style = styled.div``
