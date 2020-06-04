import {
  ComponentEventHandler,
  Flex,
  Input,
  InputProps,
  Text,
} from '@fluentui/react-northstar'
import React, { useCallback } from 'react'
import { useContainer } from 'unstated-next'
import { Store } from '../state/AppContext'
import { useTheme } from '../theme/useTheme'
import { SearchColorDisplay } from './SearchColorDisplay'

export const SearchBar: React.FC = () => {
  const { search, setSearch } = useContainer(Store)
  const { theme } = useTheme()

  const onInputChange: ComponentEventHandler<InputProps> = useCallback(
    (_e, data) => {
      if (data) {
        setSearch(String(data.value))
      }
    },
    [setSearch]
  )

  return (
    <Flex
      styles={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: theme.siteVariables.colorScheme.default.background2,
        borderBottom: `1px solid ${theme.siteVariables.colorScheme.default.border2}`,
      }}
      padding="padding.medium"
      vAlign="center"
      gap="gap.medium"
    >
      <Flex
        styles={{ width: '700px', margin: 'auto' }}
        vAlign="center"
        gap="gap.medium"
      >
        <Input
          inverted
          autoFocus
          onChange={onInputChange}
          placeholder={`ex: ${search}`}
        />
        {/* <Dropdown items={['default', 'brand', 'red']} /> */}
        <Flex.Item push>
          <Flex gap="gap.medium" vAlign="center">
            {search && <Text content={`Searching for "${search}"`} />}
            <SearchColorDisplay color={search} />
          </Flex>
        </Flex.Item>
      </Flex>
    </Flex>
  )
}
