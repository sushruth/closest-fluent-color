import React from 'react'
// Credit - https://www.toptal.com/designers/subtlepatterns/webb-dark-pattern/
import patternDark from '../assets/webb-dark.png'
// Credit - https://www.toptal.com/designers/subtlepatterns/webb-pattern/
import pattern from '../assets/webb.png'
import { useTheme } from '../theme/useTheme'

let imageToUse = pattern

if (
  window.matchMedia &&
  (window.matchMedia('(-ms-high-contrast: active)').matches ||
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  imageToUse = patternDark
}

type SearchColorDisplayProps = { color: string }

export const SearchColorDisplay: React.FC<SearchColorDisplayProps> = React.memo(
  ({ color }) => {
    const { theme } = useTheme()

    return (
      <div
        style={{
          background: theme.siteVariables.colorScheme.default.background,
          padding: 5,
          boxShadow: theme.siteVariables.shadowLevel1,
          backgroundImage: `url(${imageToUse})`,
          backgroundSize: '300px',
          borderColor: theme.siteVariables.colorScheme.default.border1,
          borderWidth: 1,
          borderStyle: 'solid',
        }}
      >
        <div
          style={{
            background: `#${color}`,
            padding: 10,
            border: `1px solid ${theme.siteVariables.colorScheme.default.border}`,
          }}
        ></div>
      </div>
    )
  }
)
