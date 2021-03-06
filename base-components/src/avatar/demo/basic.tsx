/**
 * @title 基本
 * @description 简单的头像展示，有三种尺寸，两种形状可选。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Avatar } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <div>
          <Avatar size={64} icon="account" />
          <Avatar size="large" icon="account" />
          <Avatar icon="account" />
          <Avatar size="small" icon="account" />
        </div>
        <div>
          <Avatar shape="square" size={64} icon="account" />
          <Avatar shape="square" size="large" icon="account" />
          <Avatar shape="square" icon="account" />
          <Avatar shape="square" size="small" icon="account" />
        </div>
      </div>
    </Style>
  )
}
const Style = styled.div`
  .next-avatar {
    margin: 20px 20px 0 0;
  }
`
