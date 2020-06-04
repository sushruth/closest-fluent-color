import { Provider, themes } from '@fluentui/react-northstar'
import React from 'react'
import { ColorTable } from './components/ColorTable'
import { SearchBar } from './components/SearchBar'
import { Schemes } from './lib/fluentui.colors'
import { Store } from './state/AppContext'

let theme = themes.teams

// if (window.matchMedia) {
//   if (window.matchMedia('(-ms-high-contrast: active)').matches) {
//     theme = themes.teamsHighContrast
//   } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     theme = themes.teamsDark
//   }
// }

document.documentElement.style.setProperty(
  '--main-bg-color',
  theme.siteVariables.colorScheme.default.background2
)

function App() {
  return (
    <Provider as="main" theme={theme}>
      <Store.Provider>
        <SearchBar />
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
