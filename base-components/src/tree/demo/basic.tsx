/**
 * @title 基本
 * @description 最简单的用法，展示可展开，可选中，可勾选，可编辑，可右键，禁用，禁用勾选，默认展开，默认选中，默认勾选等功能。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tree, Button } from '@alife/alicloud-components'

const TreeNode = Tree.Node

class Demo extends React.Component {
  onSelect(keys, info) {
    console.log('onSelect', keys, info)
  }

  onCheck(keys, info) {
    console.log('onCheck', keys, info)
  }

  onEditFinish(key, label, node) {
    console.log('onEditFinish', key, label, node)
  }

  onRightClick(info) {
    console.log('onRightClick', info)
  }

  render() {
    return (
      <Tree
        checkable
        editable
        defaultExpandedKeys={['2']}
        defaultCheckedKeys={['2', '4', '5']}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
        onEditFinish={this.onEditFinish}
        onRightClick={this.onRightClick}
      >
        <TreeNode key="1" label="Component">
          <TreeNode key="2" label="Form" selectable={false}>
            <TreeNode key="4" label="Input" />
            <TreeNode key="5" label="Select" disabled />
          </TreeNode>
          <TreeNode key="3" label="Display">
            <TreeNode key="6" label="Table" />
          </TreeNode>
        </TreeNode>
      </Tree>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <Demo />
    </Style>
  )
}
const Style = styled.div``
