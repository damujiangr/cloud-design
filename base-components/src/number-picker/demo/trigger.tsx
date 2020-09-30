/**
 * @title 按钮控制
 * @description 控制按钮一致显示、隐藏
 */

import * as React from 'react'
import styled from 'styled-components'

import { NumberPicker } from '@alife/alicloud-components'

function onChange(value) {
  console.log('changed', value)
}
function onCorrect(obj) {
  console.log(obj)
}

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <NumberPicker alwaysShowTrigger />
        <br />
        <br />
        <NumberPicker hasTrigger={false} />
      </div>
    </Style>
  )
}
const Style = styled.div``
