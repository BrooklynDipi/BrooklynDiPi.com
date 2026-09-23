import { useEffect, useState, type CSSProperties } from 'react'

type Theme = 'light' | 'dark'

export default function ThemeToggle() {
  // index.html sets data-theme before first paint, so read it from there
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme) ?? 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // storage unavailable (private mode, etc.): theme still works for this visit
    }
  }, [theme])

  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <span
        className="glyph"
        style={{ '--icon': `url(${import.meta.env.BASE_URL}icons/${theme === 'dark' ? 'sun' : 'moon'}.svg)` } as CSSProperties}
      />
    </button>
  )
}
