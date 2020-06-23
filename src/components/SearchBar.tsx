import {
  Checkbox,
  CheckboxProps,
  ComponentEventHandler,
  Flex,
  Header,
  Input,
  InputProps,
  pxToRem,
  Slider,
  SliderProps,
  Text,
} from '@fluentui/react-northstar'
import React, { useCallback } from 'react'
import { useContainer } from 'unstated-next'
import { Store } from '../state/AppContext'
import { useTheme } from '../theme/useTheme'
import { SearchColorDisplay } from './SearchColorDisplay'

type SearchBarProps = {
  onThemeToggle: ComponentEventHandler<CheckboxProps>
  currentTheme?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onThemeToggle,
  currentTheme: currentTeme,
}) => {
  const { search, setSearch, closeness, setCloseness } = useContainer(Store)
  const { theme } = useTheme()

  const onInputChange: ComponentEventHandler<InputProps> = useCallback(
    (_e, data) => {
      if (data) {
        setSearch(String(data.value))
      }
    },
    [setSearch]
  )

  const onSliderChange: ComponentEventHandler<SliderProps> = useCallback(
    (_e, data) => {
      if (data?.value) {
        setCloseness(Number(data.value))
      }
    },
    [setCloseness]
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
        <Flex column fill>
          <Flex>
            <Header
              as="h1"
              styles={{
                margin: 0,
                marginBottom: '1rem',
                fontSize: pxToRem(22),
              }}
              content="Search for Fluentui color"
            />
            <Flex.Item push>
              <Flex vAlign="center">
                <Checkbox
                  toggle
                  onChange={onThemeToggle}
                  defaultChecked={currentTeme === 'teamsDark'}
                />
                <Text content="Dark mode" />
              </Flex>
            </Flex.Item>
          </Flex>
          <Flex vAlign="center" gap="gap.medium">
            <Text content={`Search for:`} />
            <Input
              inverted
              autoFocus
              onChange={onInputChange}
              placeholder={`ex: ${search}`}
            />

            <SearchColorDisplay color={search} />
            <Flex.Item push>
              <Flex gap="gap.medium" vAlign="center">
                <Text content="Sensitivity" />
                <Slider
                  fluid
                  styles={{ width: '100px' }}
                  min={0.1}
                  max={1.0}
                  step={0.1}
                  onChange={onSliderChange}
                  defaultValue={closeness}
                />
              </Flex>
            </Flex.Item>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
