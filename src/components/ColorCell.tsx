import { Flex, Text } from '@fluentui/react-northstar'
import React from 'react'
import { UndefinedColor } from '../lib/fluentui.colors'

type ColorCellProps = { color: string }

export const ColorCell: React.FC<ColorCellProps> = React.memo(({ color }) => {
  return (
    <Flex fill vAlign="center">
      {color !== UndefinedColor && (
        <div
          style={{
            width: 16,
            height: 16,
            background: color,
            marginRight: 16,
          }}
        />
      )}
      <Text
        styles={{ fontFamily: 'monospace' }}
        content={color.toUpperCase()}
      />
    </Flex>
  )
})
