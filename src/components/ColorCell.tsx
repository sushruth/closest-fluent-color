import { Flex, ICSSInJSStyle, Text } from '@fluentui/react-northstar'
import React, { useMemo, useCallback } from 'react'
import { useContainer } from 'unstated-next'
import { colorsMapById, UndefinedColor } from '../lib/fluentui.colors'
import { Store } from '../state/AppContext'
import bezier from 'bezier-easing'

const commonItemStyles: ICSSInJSStyle = {
  borderWidth: '0.2rem',
  borderStyle: 'solid',
  flex: 1,
}

type ColorCellProps = { id: string }

export const ColorCell: React.FC<ColorCellProps> = ({ id }) => {
  const color = useMemo(() => {
    return colorsMapById.get(id) || ''
  }, [id])

  const { matches, closeness } = useContainer(Store)

  const adjust = useCallback(
    (n: number) => {
      return bezier(closeness, 0, 1, 1 - closeness)(n / 100)
    },
    [closeness]
  )

  const borderColor = useMemo(() => {
    const match = matches.get(id) || 0
    const matchInverse = 100 - match
    const matchAdjusted = adjust(matchInverse)
    if (match < 0) {
      return 'transparent'
    } else if (matchInverse >= 100) {
      return 'rgb(26, 235, 255)'
    } else {
      return `rgba(63, 242, 63, ${matchAdjusted})`
    }
  }, [adjust, id, matches])

  return (
    <Flex
      fill
      vAlign="center"
      styles={{ ...commonItemStyles, borderColor, flex: 1 }}
    >
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
}
