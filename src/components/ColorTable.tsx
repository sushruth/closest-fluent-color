import {
  Flex,
  ICSSInJSStyle,
  TableRowProps,
  Text,
} from '@fluentui/react-northstar'
import { Table } from '@fluentui/react-northstar/dist/es/components/Table/Table'
import React, { useMemo } from 'react'
import { useContainer } from 'unstated-next'
import {
  colorSchemeNames,
  colorsSeparatedByScheme,
  Schemes,
  UndefinedColor,
} from '../lib/fluentui.colors'
import { Store } from '../state/AppContext'
import { ColorCell } from './ColorCell'

const header = {
  items: ['Name', 'Light theme', 'Dark theme', 'High contrast theme'],
  styles: {
    order: -1,
  },
}

const commonItemStyles: ICSSInJSStyle = {
  borderWidth: '0.2rem',
  borderStyle: 'solid',
  flex: 1,
}

type ColorTableProps = {
  scheme: Schemes
}

export const ColorTable: React.FC<ColorTableProps> = ({ scheme }) => {
  const { matches } = useContainer(Store)
  const rows = useMemo(
    () =>
      colorsSeparatedByScheme[scheme].map(
        ({ token, light, dark, highContrast }): TableRowProps | undefined => {
          // const totalMatch = lightMatch + darkMatch + highContrastMatch;
          if (
            light.value === UndefinedColor &&
            dark.value === UndefinedColor &&
            highContrast.value === UndefinedColor
          ) {
            return undefined
          }
          const lightMatch = matches.get(light.id) || 0
          const darkMatch = matches.get(dark.id) || 0
          const highContrastMatch = matches.get(highContrast.id) || 0
          const total = lightMatch + darkMatch + highContrastMatch

          if (total > 0 && total < 0.3) {
            return undefined
          }

          return {
            items: [
              {
                content: token,
                key: `color-table-${scheme}-row-${token}-cell-${token}`,
                styles: commonItemStyles,
              },
              {
                content: <ColorCell color={light.value} />,
                key: `color-table-${scheme}-row-${token}-cell-${light.id}`,
                styles: {
                  ...commonItemStyles,
                  borderColor:
                    lightMatch >= 1
                      ? '#3ff23f'
                      : `rgba(10,92,100,${lightMatch})`,
                },
              },
              {
                content: <ColorCell color={dark.value} />,
                key: `color-table-${scheme}-row-${token}-cell-${dark.id}`,
                styles: {
                  ...commonItemStyles,
                  borderColor:
                    darkMatch >= 1 ? '#3ff23f' : `rgba(10,92,100,${darkMatch})`,
                },
              },
              {
                content: <ColorCell color={highContrast.value} />,
                key: `color-table-${scheme}-row-${token}-cell-${highContrast.id}`,
                styles: {
                  ...commonItemStyles,
                  borderColor:
                    highContrastMatch >= 1
                      ? '#3ff23f'
                      : `rgba(10,92,100,${highContrastMatch})`,
                },
              },
            ],
            // @ts-ignore
            key: `color-table-${scheme}-row-${token}`,
          }
        }
      ),
    [matches, scheme]
  )

  return (
    <Flex
      styles={{ maxWidth: 700, margin: 'auto', position: 'relative' }}
      column
      gap="gap.medium"
      padding="padding.medium"
    >
      <Text content={colorSchemeNames[scheme]} />
      <Table compact header={header} rows={rows} />
    </Flex>
  )
}
