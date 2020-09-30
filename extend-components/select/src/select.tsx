import React, { useMemo, useState } from 'react'
import { Card, Select } from '@alife/alicloud-components'
import List, { IDataItem, IListProps } from './list'
import { SSelect } from './styles'
import { IFusionConfigProps, GetFusionConfig } from './utils'

type SelectProps = React.ComponentProps<typeof Select>

/**
 * @public
 */
export interface ISelectDataItem {
  /**
   * 列表项ID
   */
  id: string
  /**
   * 列表项标题
   */
  title?: React.ReactNode
  /**
   * 列表项内容
   */
  description?: React.ReactNode
  /**
   * 列表项是否被选中
   */
  selected?: boolean
  /**
   * 列表项标签
   */
  tags?: string[]
}

/**
 * @public
 */
export interface IListSelectProps {
  /**
   * 单选还是多选
   * @defaultValue `'single'`
   */
  mode?: 'multiple' | 'single'
  /**
   * 下拉选择列表数据。数据类型见`ISelectDataItem`
   */
  dataSource: ISelectDataItem[]
  /**
   * 当前被选中的id。必传，因为本组件只有受控模式
   */
  selectedIds: string[]
  /**
   * 用户选择发生变化的回调
   */
  onSelectChange?: (selectedIds: string[]) => void
  /**
   * 搜索框值发生变化的回调<br />
   * 传入此属性，使得选择器拥有搜索功能，用户可以输入字符串进行搜索<br />
   * 一般要在此回调中更新`dataSource`（下拉选择列表数据）
   */
  onSearchChange?: (searchStr: string) => void
  /**
   * 下拉菜单没有数据时的显示内容
   * @defaultValue `<Card>No content</Card>`
   */
  noContentView?: React.ReactNode
  /**
   * @internal
   */
  listProps?: Omit<IListProps, 'data'>
  /**
   * 透传给`<Select>`基础组件的props
   */
  selectProps?: SelectProps
}

interface ISelectedValue {
  value: string
  label: string
}

const ListSelect: React.FC<IListSelectProps & IFusionConfigProps> = ({
  mode = 'single',
  dataSource,
  selectedIds,
  onSelectChange,
  listProps,
  selectProps,
  onSearchChange,
  noContentView = <Card>No content</Card>,
  fusionConfig
}) => {
  const actualSelectedIds = (() => {
    if (!Array.isArray(selectedIds)) return []
    if (selectedIds.length === 0) return []
    if (mode === 'single') {
      if (selectedIds.length > 1)
        console.warn(
          `wind-rc-select-list: selectedIds.length > 1 in single mode`
        )
      return [selectedIds[0]]
    }
    return [...selectedIds]
  })()
  const { prefix = 'next-' } = fusionConfig
  const [searchInput, setSearchInput] = useState('')
  const [popupVisible, setPopupVisible] = useState(false)
  const selectedValue: ISelectedValue[] = useMemo(
    () => actualSelectedIds.map(id => ({ value: id, label: id })),
    [actualSelectedIds]
  )
  const listData: IDataItem[] = useMemo(
    () =>
      dataSource.map(item => {
        if (actualSelectedIds.indexOf(item.id) < 0)
          return { ...item, selected: false }
        return { ...item, selected: true }
      }),
    [dataSource, actualSelectedIds]
  )

  const popupContent =
    listData.length === 0 ? (
      noContentView
    ) : (
      <List
        {...listProps}
        data={listData}
        onItemClick={index => {
          if (listProps && listProps.onItemClick) listProps.onItemClick(index)

          const clickedId = dataSource[index].id
          const newSelectedIds = (() => {
            // 单选模式下
            if (mode === 'single') return [clickedId]

            // 多选模式下，有则删掉，没则加上
            if (actualSelectedIds.indexOf(clickedId) < 0) {
              return [...actualSelectedIds, clickedId]
            }
            return actualSelectedIds.filter(v => v !== clickedId)
          })()

          // 单选模式下，选中一个就收起弹层
          if (mode === 'single') {
            setPopupVisible(false)
          }

          // 通知父组件
          typeof onSelectChange === 'function' && onSelectChange(newSelectedIds)
        }}
      />
    )

  const searchProps = (() => {
    if (onSearchChange)
      return {
        showSearch: true,
        filterLocal: false,
        onSearch: (v: string) => {
          setSearchInput(v)
          onSearchChange(v)
        },
        searchValue: searchInput
      }
    return undefined
  })()

  return (
    <SSelect
      followTrigger
      {...selectProps}
      // 当处于single模式下时，也使用multiple的样式
      mode="multiple"
      value={selectedValue}
      {...searchProps}
      visible={popupVisible}
      onVisibleChange={setPopupVisible}
      onChange={(newValue: ISelectedValue[], changeType: string) => {
        if (changeType !== 'tag') return
        // 用户通过点击标签上的“x”来删掉选项
        const newSelectedIds = newValue.map(v => v.value)
        typeof onSelectChange === 'function' && onSelectChange(newSelectedIds)
      }}
      popupContent={popupContent}
      prefix={prefix}
    />
  )
}

/**
 * @public
 */
const defaultExp: React.FC<IListSelectProps> = GetFusionConfig(ListSelect)
export default defaultExp
