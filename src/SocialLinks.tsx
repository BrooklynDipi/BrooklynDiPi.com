import type { CSSProperties } from 'react'
import githubIcon from './icons/github.svg'
import linkedinIcon from './icons/linkedin.svg'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brooklyn-dipietrantonio-0a02501a4/', icon: linkedinIcon },
  { label: 'GitHub', href: 'https://github.com/BrooklynDipi', icon: githubIcon },
]

export default function SocialLinks() {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.label}
          className="icon-button"
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          title={link.label}
        >
          <span className="glyph" style={{ '--icon': `url("${link.icon}")` } as CSSProperties} />
        </a>
      ))}
    </>
  )
}
