import { useEffect } from 'react'
import ComingSoon from './ComingSoon'
import RadialMenu from './RadialMenu'
import Toolbar from './Toolbar'
import { categories } from './categories'
import { useHash } from './useHash'

const SITE_TITLE = 'BrooklynDiPi.com'

function App() {
  // Each category's href (e.g. "#projects") is its page address
  const hash = useHash()
  const category = categories.find((c) => c.href === hash)

  useEffect(() => {
    document.title = category ? `${category.label} · ${SITE_TITLE}` : SITE_TITLE
    window.scrollTo(0, 0)
  }, [category])

  return (
    <>
      <Toolbar />
      {category ? (
        <ComingSoon key={category.href} category={category} />
      ) : (
        <main className="page home">
          <RadialMenu items={categories} logoSrc={`${import.meta.env.BASE_URL}brooklynbaby.png`} logoAlt="Brooklyn DiPietrantonio" />
        </main>
      )}
    </>
  )
}

export default App
