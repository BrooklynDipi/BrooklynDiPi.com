import RadialMenu from './RadialMenu'
import RollingText from './RollingText'
import SocialLinks from './SocialLinks'
import ThemeToggle from './ThemeToggle'
import { categories } from './categories'
import { ROLE_INTERVAL, roles } from './roles'

function App() {
  return (
    <>
      <header className="toolbar">
        <h1 className="toolbar__title">
          <span className="toolbar__name">Brooklyn DiPietrantonio</span>
          <span className="toolbar__dot" aria-hidden="true">·</span>
          <RollingText words={roles} interval={ROLE_INTERVAL} />
        </h1>
        <div className="toolbar__actions">
          <SocialLinks />
          <span className="toolbar__dot" aria-hidden="true">·</span>
          <ThemeToggle />
        </div>
      </header>
      <main className="home">
        <RadialMenu items={categories} logoSrc="/brooklynbaby.png" logoAlt="Brooklyn DiPietrantonio" />
      </main>
    </>
  )
}

export default App
