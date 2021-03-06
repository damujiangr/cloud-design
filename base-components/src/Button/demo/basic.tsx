/**
 * @title 按钮类型
 * @description 按钮有三种视觉层次：主按钮、次按钮、普通按钮。不同的类型可以用来区别按钮的重要程度。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Button type="normal">确认</Button> &nbsp;&nbsp;
        <Button type="primary">确认吗</Button> &nbsp;&nbsp;
        <Button type="primary">非常确认</Button> &nbsp;&nbsp;
        <Button type="primary">非常非常确认</Button> &nbsp;&nbsp;
        <Button type="secondary">Secondary</Button>
        <br />
        <br />
        <Button type="normal" text>
          Normal
        </Button>{' '}
        &nbsp;&nbsp;
        <Button type="primary" text>
          Primary
        </Button>{' '}
        &nbsp;&nbsp;
        <Button type="secondary" text>
          Secondary
        </Button>
        <br />
        <br />
        <Button type="normal" warning>
          Normal
        </Button>{' '}
        &nbsp;&nbsp;
        <Button type="primary" warning>
          Primary
        </Button>{' '}
        &nbsp;&nbsp;
      </div>
    </Style>
  )
}
const Style = styled.div``
