/**
 * @title 多语言
 * @description 日期时间的多语言来源于 moment ，可以通过 `moment.locale('zh-cn')` 来设置显示中文。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Calendar } from '@alife/alicloud-components'
import moment from 'moment'

// Setting moment locale to Chinese
moment.locale('zh-cn')

export default function DemoComponent() {
  return (
    <Style>
      <Calendar />
    </Style>
  )
}
const Style = styled.div``
