/**
 * @title 按钮组
 * @description `Button.Group` 子组件用于将多个按钮组合在一个容器中。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Icon } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Button.Group>
          <Button type="primary">OK</Button>
          <Button type="secondary">Cancel</Button>
        </Button.Group>
        &nbsp;&nbsp;
        <Button.Group>
          <Button disabled>Left</Button>
          <Button disabled>Middle</Button>
          <Button disabled>Right</Button>
        </Button.Group>
        <br />
        <br />
        <Button.Group>
          <Button type="primary">
            <Icon type="arrow-left" /> Backward
          </Button>
          <Button type="primary">
            Forward <Icon type="arrow-right" />
          </Button>
        </Button.Group>
        &nbsp;&nbsp;
        <Button.Group>
          <Button type="primary">
            <Icon type="prompt" />
          </Button>
          <Button type="primary">
            <Icon type="clock" />
          </Button>
          <Button type="primary">
            <Icon type="set" />
          </Button>
        </Button.Group>
      </div>
    </Style>
  )
}
const Style = styled.div``
