/**
 * @title 菜单选择模式
 * @description 通过 selectMode 控制菜单的选择模式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { MenuButton } from '@alife/alicloud-components'

const { Item } = MenuButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map((item) => (
  <Item key={item}>{item}</Item>
))

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <MenuButton
          label="Document Edit"
          selectMode="single"
          onSelect={(keys) => console.log(keys)}
        >
          {menu}
        </MenuButton>
      </div>
    </Style>
  )
}
const Style = styled.div``
