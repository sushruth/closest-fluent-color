import { useState, useCallback } from 'react'
import { colorsMapById, UndefinedColor } from '../lib/fluentui.colors'
import * as culori from 'culori'
import { createContainer } from 'unstated-next'

// const toRgb = culori.formatter('rgb')
// const lab = culori.converter('lab')
const colorDiff = culori.differenceDin99o()

const baseMatch = new Map(
  Array.from(colorsMapById.keys()).map((key) => [key, -1])
)

const closeness = 0.1

const adjust = (n: number) => {
  // Exponential match by a factor of 8 within the range of 0 to 1, closeness factor c
  // e^(-2ecx/100)
  return Math.exp((-2 * (closeness * 10) * Math.exp(1) * n) / 100)
}

function useStore() {
  const [search, setSearchRaw] = useState('')
  const [matches, setMatch] = useState(baseMatch)

  const setSearch = useCallback(
    (input?: string) => {
      const matchResult = new Map(baseMatch)
      if (input?.toLowerCase() === 'transparent') {
        for (let [id] of matches.entries()) {
          const colorToMatch = colorsMapById.get(id)
          if (colorToMatch && colorToMatch !== UndefinedColor) {
            matchResult.set(
              id,
              colorToMatch.toLowerCase() === 'transparent' ? 1 : 0
            )
          }
        }
        setMatch(matchResult)
      } else {
        const inputColor = culori.parse(input)
        if (inputColor) {
          setSearchRaw(input || '')
          for (let [id] of matches.entries()) {
            const colorToMatch = colorsMapById.get(id)
            if (colorToMatch && colorToMatch !== UndefinedColor) {
              const diff = colorDiff(inputColor, culori.parse(colorToMatch))
              matchResult.set(id, adjust(diff))
            }
          }
          setMatch(matchResult)
        }
      }
    },
    [matches]
  )

  return {
    search,
    setSearch,
    matches,
  }
}

export const Store = createContainer(useStore)
