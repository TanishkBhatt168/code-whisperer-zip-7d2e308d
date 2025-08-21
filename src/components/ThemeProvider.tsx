import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"
type ColorTheme = "blue" | "purple" | "green" | "orange"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultColorTheme?: ColorTheme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  colorTheme: ColorTheme
  setTheme: (theme: Theme) => void
  setColorTheme: (colorTheme: ColorTheme) => void
}

const initialState: ThemeProviderState = {
  theme: "light",
  colorTheme: "blue",
  setTheme: () => null,
  setColorTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  defaultColorTheme = "blue",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme
  })
  
  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    return (localStorage.getItem(`${storageKey}-color`) as ColorTheme) || defaultColorTheme
  })

  useEffect(() => {
    const root = window.document.documentElement
    
    root.classList.remove("light", "dark", "theme-purple", "theme-green", "theme-orange")
    
    root.classList.add(theme)
    if (colorTheme !== "blue") {
      root.classList.add(`theme-${colorTheme}`)
    }
  }, [theme, colorTheme])

  const value = {
    theme,
    colorTheme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
    setColorTheme: (colorTheme: ColorTheme) => {
      localStorage.setItem(`${storageKey}-color`, colorTheme)
      setColorTheme(colorTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}