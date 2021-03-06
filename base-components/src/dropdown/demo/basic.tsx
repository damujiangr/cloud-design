/**
 * @title 基本
 * @description 最简单的用法。
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
      <div>
        <Dropdown
          trigger={<button>Hello dropdown</button>}
          triggerType={['click', 'hover']}
          afterOpen={() => console.log('after open')}
        >
          {menu}
        </Dropdown>
      </div>
    </Style>
  )
}
const Style = styled.div``
