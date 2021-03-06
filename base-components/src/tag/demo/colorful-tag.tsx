/**
 * @title 彩色标签
 * @description 在非 `closeable` 和 `selectable` 类型下，可以通过增加 `color` 属性来为 tag 设置自定义颜色。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tag, Icon } from '@alife/alicloud-components'

const { Group: TagGroup } = Tag

const presetColors = ['blue', 'green', 'orange', 'red', 'turquoise', 'yellow']
// set custom color with hex value, do not use color keywords
const customColos = ['#f50', '#2db7f5', '#87d068', '#108ee9']

export default function DemoComponent() {
  return (
    <Style>
      <div className="tag-list">
        <h4>presets</h4>
        <TagGroup>
          {presetColors.map((color) => (
            <Tag key={`p_n_${color}`} type="normal" color={color}>
              {color}
            </Tag>
          ))}
        </TagGroup>

        <TagGroup>
          {presetColors.map((color) => (
            <Tag key={`p_p_${color}`} type="primary" color={color}>
              {color}
            </Tag>
          ))}
        </TagGroup>

        <h4>custom colors</h4>

        <TagGroup>
          {customColos.map((color) => (
            <Tag key={`c_${color}`} color={color}>
              {color}
            </Tag>
          ))}
        </TagGroup>
      </div>
    </Style>
  )
}
const Style = styled.div``
