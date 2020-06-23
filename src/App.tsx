import {
  CheckboxProps,
  ComponentEventHandler,
  Provider,
  themes,
} from '@fluentui/react-northstar'
import React, { useCallback, useState } from 'react'
import { ColorTable } from './components/ColorTable'
import { SearchBar } from './components/SearchBar'
import { Schemes } from './lib/fluentui.colors'
import { Store } from './state/AppContext'

let theme = themes.teams

const themeStored = localStorage.getItem('cfc_theme') ?? 'teams'

if (/teamsDark/i.test(themeStored)) {
  console.log('Making it dark')
  theme = themes.teamsDark
}

function App() {
  const [themeUsed, setTheme] = useState(theme)

  const onThemeToggle: ComponentEventHandler<CheckboxProps> = useCallback(
    (_, data) => {
      if (data?.checked) {
        setTheme(themes.teamsDark)
        document.documentElement.style.setProperty(
          '--main-bg-color',
          themes.teamsDark.siteVariables.colorScheme.default.background2
        )
        localStorage.setItem('cfc_theme', 'teamsDark')
      } else {
        setTheme(themes.teams)
        document.documentElement.style.setProperty(
          '--main-bg-color',
          themes.teams.siteVariables.colorScheme.default.background2
        )
        localStorage.setItem('cfc_theme', 'teams')
      }
    },
    []
  )

  return (
    <Provider as="main" theme={themeUsed}>
      <Store.Provider>
        <SearchBar currentTheme={themeStored} onThemeToggle={onThemeToggle} />
        {Object.keys(Schemes).map((scheme) => {
          return (
            <ColorTable
              key={`scheme-table-${scheme}`}
              scheme={scheme as Schemes}
            />
          )
        })}
      </Store.Provider>
    </Provider>
  )
}

export default App
