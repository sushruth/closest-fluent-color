import { Flex, Header, TableRowProps } from '@fluentui/react-northstar'
import { Table } from '@fluentui/react-northstar/dist/es/components/Table/Table'
import React, { useMemo } from 'react'
import {
  colorSchemeNames,
  colorsSeparatedByScheme,
  Schemes,
  UndefinedColor,
} from '../lib/fluentui.colors'
import { ColorCell } from './ColorCell'

const header = {
  items: ['Name', 'Light theme', 'Dark theme', 'High contrast theme'],
  styles: {
    order: -1,
  },
}

type ColorTableProps = {
  scheme: Schemes
}

export const ColorTable: React.FC<ColorTableProps> = React.memo(
  ({ scheme }) => {
    const rows = useMemo(
      () =>
        colorsSeparatedByScheme[scheme].map(
          ({ token, light, dark, highContrast }): TableRowProps | undefined => {
            if (
              light.value === UndefinedColor &&
              dark.value === UndefinedColor &&
              highContrast.value === UndefinedColor
            ) {
              return undefined
            }

            return {
              items: [
                token,
                <ColorCell key={`color-${light.id}`} id={light.id} />,
                <ColorCell key={`color-${dark.id}`} id={dark.id} />,
                <ColorCell
                  key={`color-${highContrast.id}`}
                  id={highContrast.id}
                />,
              ],
              // @ts-ignore
              key: `table-row-${scheme}-${token}`,
            }
          }
        ),
      [scheme]
    )

    return (
      <Flex
        styles={{
          maxWidth: '700px',
          margin: 'auto',
          position: 'relative',
          '& .ui-table__cell__content': {
            width: '100%',
          },
          '& .ui-table__cell': {
            height: 'auto',
          },
        }}
        column
        gap="gap.medium"
        padding="padding.medium"
      >
        <Header content={colorSchemeNames[scheme]} />
        <Table compact header={header} rows={rows} />
      </Flex>
    )
  }
)
