import React from 'react'
import { Message } from '@alife/alicloud-components'
import AppLayout from '@alife/alicloud-components-console-layout'
import ConsoleMenu from '@alife/alicloud-components-console-menu'
import Page from '@alife/alicloud-components-console-page'

/* eslint-disable jsx-a11y/anchor-is-valid */

const Nav = () => (
  <ConsoleMenu header="产品控制台">
    <ConsoleMenu.Item key="overview">概览</ConsoleMenu.Item>
    <ConsoleMenu.Item key="instance">实例</ConsoleMenu.Item>
    <ConsoleMenu.SubMenu key="log" label="日志">
      <ConsoleMenu.Item key="access-log">访问日志</ConsoleMenu.Item>
      <ConsoleMenu.Item key="load-log">负载日志</ConsoleMenu.Item>
    </ConsoleMenu.SubMenu>
    <ConsoleMenu.Item key="help">产品帮助</ConsoleMenu.Item>
    <ConsoleMenu.Item key="api-docs">API 文档</ConsoleMenu.Item>
  </ConsoleMenu>
)

// 使用 `defaultNavCollapsed` 在非受控的情况下控制第一次渲染时的导航区域是否展开或收起
const Example: React.FC<{}> = () => (
  <AppLayout nav={<Nav />} defaultNavCollapsed>
    <Page>
      <Page.Header title="概览" />
      <Page.Content>
        <Message type="success">
          您购买的位于新加坡的 A3 型实例
          <a href="#" style={{ padding: '0 4px' }}>
            ecs-7ui6t9vra
          </a>
          已经部署完毕
        </Message>
      </Page.Content>
    </Page>
  </AppLayout>
)

export default Example
