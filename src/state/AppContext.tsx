import * as culori from 'culori'
import { useCallback, useRef, useState } from 'react'
import { createContainer } from 'unstated-next'
import { colorsMapById, UndefinedColor } from '../lib/fluentui.colors'

// const toRgb = culori.formatter('rgb')
// const lab = culori.converter('lab')
const colorDiff = culori.differenceDin99o()

const baseMatch = new Map(
  Array.from(colorsMapById.keys()).map((key) => [key, -1])
)

const DEBOUNCE_TIME_LIMIT = 500

function useStore() {
  const [search, setSearchRaw] = useState('')
  const [matches, setMatch] = useState(baseMatch)
  const [closeness, setClosenessRaw] = useState(0.5)
  const timeout = useRef<number>()
  const closenessTemp = useRef<number>(-1)

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
              matchResult.set(id, diff)
            }
          }
          setMatch(matchResult)
        }
      }
    },
    [matches]
  )

  const setCloseness = useCallback((newCloseness: number) => {
    closenessTemp.current = newCloseness
    clearTimeout(timeout.current)
    timeout.current = window.setTimeout(() => {
      timeout.current = undefined
      setClosenessRaw(closenessTemp.current)
    }, DEBOUNCE_TIME_LIMIT)
  }, [])

  return {
    search,
    setSearch,
    matches,
    closeness,
    setCloseness,
  }
}

export const Store = createContainer(useStore)
