/**
 * @title 收展框（向下拉出）
 */

import React, { useState } from 'react'
import { Card } from '@alife/alicloud-components'

interface IProps {}

const Demo: React.FC<IProps> = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <Card free contentHeight="auto" style={{ width: 300 }}>
      <Card.Header title="最新热点" />
      <Card.Header title="AI如何把招人的效率提高四成" />
      <Card.Content>
        {collapsed
          ? '阿里云公共云控制台是一个包含了100+云产品的庞大产品集群，是一个结构复杂且庞大，目前仍在快速迭代更新的产品体系。我们通过大量实践、梳理和打磨，呈现出公共云控制台设计系统。'
          : '阿里云公共云控制台是一个包含了100+云产品的庞大产品集群，是一个结构复杂且庞大，目前仍在快速迭代更新的产品体系。我们通过大量实践、梳理和打磨，呈现出公共云控制台设计系统。将为阿里云公共云提供前沿创新、包容且智能的产品解决方案。提供轻松、可信赖的使用体验。呈现简洁有序、精致的视觉体验。'}
      </Card.Content>
      <Card.CollapsableTail
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
      >
        展开更多
      </Card.CollapsableTail>
    </Card>
  )
}

export default Demo
