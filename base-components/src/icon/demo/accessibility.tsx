/**
 * @title 无障碍
 * @description 若为装饰性icon，请设置通过设置 `aria-hidden` 忽略；若为按钮类型icon，请务必设置 `role="button"` 和 `aria-label`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Icon } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        button: <br />
        <Icon
          type="atm"
          role="button"
          aria-label="icon atm"
          style={{ margin: '5px' }}
        />
        <Icon
          type="smile"
          role="button"
          aria-label="icon smile"
          style={{ margin: '5px' }}
        />
        <br />
        decoration: <br />
        <Icon type="success" aria-hidden style={{ margin: '5px' }} />
      </div>
    </Style>
  )
}
const Style = styled.div``
