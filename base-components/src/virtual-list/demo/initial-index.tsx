/**
 * @title 设置初始位置
 * @description 使用 jumpIndex 设置初始位置
 */

import * as React from 'react'
import styled from 'styled-components'

import { VirtualList } from '@alife/alicloud-components'

const dataSource = []

function generateLi(index) {
  return (
    <li key={`key-${index}`} style={{ lineHeight: '20px' }}>
      key-{index}
    </li>
  )
}
function generateData(len) {
  for (let i = 0; i < len; i++) {
    dataSource.push(generateLi(i))
  }
}

class App extends React.Component {
  state = {
    initial: 50,
    dataSource: generateData(1000)
  }
  onClick() {
    this.setState({
      initial: this.state.initial + 20
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>
          jump to {this.state.initial + 20}
        </button>
        <br />
        <br />
        <div className={'virtual-box'}>
          <VirtualList ref="virtual" jumpIndex={this.state.initial}>
            {dataSource}
          </VirtualList>
        </div>
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <App />
    </Style>
  )
}
const Style = styled.div`
  .virtual-box {
    height: 200px;
    width: 200px;
    border: 1px solid #ddd;
    overflow: auto;
  }
  .virtual-box ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .virtual-box li {
    padding-left: 10px;
    border-bottom: 1px solid #333;
  }
`
