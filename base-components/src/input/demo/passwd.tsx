/**
 * @title 密码输入框
 * @description 设置 `Input` 为 密码类型；
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alife/alicloud-components'

function onChange(v) {
  console.log(v)
}

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Input.Password
          placeholder="please input password"
          onChange={onChange}
        />
        <br />
        <br />
        <Input.Password
          size="large"
          placeholder="please input password"
          onChange={onChange}
        />
        <br />
        <br />
        <Input.Password
          size="small"
          placeholder="please input password"
          onChange={onChange}
        />
        <br />
        <br />
      </div>
    </Style>
  )
}
const Style = styled.div``
