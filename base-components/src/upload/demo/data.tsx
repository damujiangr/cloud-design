/**
 * @title 自定义上传参数
 * @description 通过 data 控制自定义参数
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Button } from '@alife/alicloud-components'

function beforeUpload(info) {
  console.log('beforeUpload callback : ', info)
}

function onChange(info) {
  console.log('onChange callback : ', info)
}
export default function DemoComponent() {
  return (
    <Style>
      (
      <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        data={{ token: 'abcd' }}
        beforeUpload={beforeUpload}
        onChange={onChange}
        defaultValue={[
          {
            name: 'IMG.png',
            state: 'done',
            size: 1024,
            downloadURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            imgURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
          }
        ]}
      >
        <Button type="primary" style={{ margin: '0 0 10px' }}>
          Upload File
        </Button>
      </Upload>
      )
    </Style>
  )
}
const Style = styled.div``
