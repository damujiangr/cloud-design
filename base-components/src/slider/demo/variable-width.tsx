/**
 * @title 不同的图片宽度
 * @description Slider 在默认情况下会认为所有的子元素是等宽的。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alife/alicloud-components'

const settings = {
  className: 'custom-slide variable-width',
  arrowPosition: 'outer',
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
}

export default function DemoComponent() {
  return (
    <Style>
      <Slider {...settings}>
        <div style={{ width: 100 }}>
          <p>100</p>
        </div>
        <div style={{ width: 200 }}>
          <p>200</p>
        </div>
        <div style={{ width: 75 }}>
          <p>75</p>
        </div>
        <div style={{ width: 300 }}>
          <p>300</p>
        </div>
        <div style={{ width: 225 }}>
          <p>225</p>
        </div>
        <div style={{ width: 175 }}>
          <p>175</p>
        </div>
      </Slider>
    </Style>
  )
}
const Style = styled.div`
  .variable-width .next-slick-slide p {
    background: #4f74b3;
    height: 100px;
    color: #fff;
    margin: 5px;
    line-height: 100px;
    text-align: center;
  }
`
