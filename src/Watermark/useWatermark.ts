import { useEffect, useState } from 'react'
import { WatermarkProps } from '.'
import { merge } from 'lodash-es'

export type WatermarkProps = Omit<
  WatermarkProps,
  'className' | 'style' | 'children'
>

export default function useWatermark(params: WatermarkProps) {
  const [options, setOptions] = useState(params || {})

  function drawWaterMark() {}

  useEffect(() => {
    drawWaterMark()
  }, [options])

  return {
    generateWatermark: (newOptions: Partial<WatermarkProps>) => {
      setOptions(merge({}, options, newOptions))
    },
    destroy: () => {},
  }
}
