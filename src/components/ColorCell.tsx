import { Flex, ICSSInJSStyle, Text } from '@fluentui/react-northstar'
import React, { useMemo } from 'react'
import { useContainer } from 'unstated-next'
import { colorsMapById, UndefinedColor } from '../lib/fluentui.colors'
import { Store } from '../state/AppContext'

const commonItemStyles: ICSSInJSStyle = {
  borderWidth: '0.2rem',
  borderStyle: 'solid',
  flex: 1,
}

type ColorCellProps = { id: string }

export const ColorCell: React.FC<ColorCellProps> = React.memo(({ id }) => {
  const color = useMemo(() => {
    return colorsMapById.get(id) || ''
  }, [id])

  const { matches } = useContainer(Store)

  const borderColor = useMemo(() => {
    const match = matches.get(id)
    return match && match >= 1
      ? 'rgb(26, 235, 255)'
      : `rgba(63, 242, 63, ${match})`
  }, [id, matches])

  return (
    <Flex fill vAlign="center" styles={{ ...commonItemStyles, borderColor }}>
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
