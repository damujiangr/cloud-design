import React from 'react'
import { ConfigProvider } from '@alife/alicloud-components'

export interface IFusionConfig {
  prefix?: string
}

export interface IFusionConfigProps {
  fusionConfig: IFusionConfig
}

export function GetFusionConfig<
  PropType extends { fusionConfig: IFusionConfig }
>(Wrapped: React.ComponentType<PropType>) {
  const ConfifgConsumer: any = (ConfigProvider as any).Consumer
  const HOC: React.FC<Omit<PropType, 'fusionConfig'>> = props => (
    <ConfifgConsumer>
      {(context: IFusionConfig) => (
        <Wrapped {...(props as PropType)} fusionConfig={context} />
      )}
    </ConfifgConsumer>
  )
  return HOC
}
