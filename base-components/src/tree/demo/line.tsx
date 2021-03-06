/**
 * @title 带线样式
 * @description 展示Tree组件带线的样式外观。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tree } from '@alife/alicloud-components'

const TreeNode = Tree.Node

export default function DemoComponent() {
  return (
    <Style>
      <Tree defaultExpandAll showLine>
        <TreeNode label="Trunk">
          <TreeNode label="Branch">
            <TreeNode label="Branch">
              <TreeNode label="Leaf" />
            </TreeNode>
            <TreeNode label="Leaf" />
          </TreeNode>
          <TreeNode label="Branch">
            <TreeNode label="Leaf" />
            <TreeNode label="Leaf" />
          </TreeNode>
        </TreeNode>
      </Tree>
    </Style>
  )
}
const Style = styled.div``
