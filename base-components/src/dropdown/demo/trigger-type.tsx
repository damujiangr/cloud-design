/**
 * @title 触发的事件类型
 * @description 使用 triggerType 设置触发的事件类型。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Dropdown, Menu } from '@alife/alicloud-components'

const menu = (
  <Menu>
    <Menu.Item>Option 1</Menu.Item>
    <Menu.Item>Option 2</Menu.Item>
    <Menu.Item>Option 3</Menu.Item>
    <Menu.Item>Option 4</Menu.Item>
  </Menu>
)

export default function DemoComponent() {
  return (
    <Style>
      <Dropdown trigger={<a>Click me</a>} triggerType="click">
        {menu}
      </Dropdown>
    </Style>
  )
}
const Style = styled.div``
