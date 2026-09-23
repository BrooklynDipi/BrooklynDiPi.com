import RollingText from './RollingText'
import SocialLinks from './SocialLinks'
import ThemeToggle from './ThemeToggle'
import { ROLE_INTERVAL, roles } from './roles'

export default function Toolbar() {
  return (
    <header className="toolbar">
      <h1 className="toolbar__title">
        {/* Your name doubles as the link back to the home page */}
        <a className="toolbar__name" href="#">
          Brooklyn DiPietrantonio
        </a>
        <span className="toolbar__dot" aria-hidden="true">·</span>
        <RollingText words={roles} interval={ROLE_INTERVAL} />
      </h1>
      <div className="toolbar__actions">
        <SocialLinks />
        <span className="toolbar__dot" aria-hidden="true">·</span>
        <ThemeToggle />
      </div>
    </header>
  )
}
