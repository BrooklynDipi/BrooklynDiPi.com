import type { CSSProperties } from 'react'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile', icon: '/icons/linkedin.svg' },
  { label: 'GitHub', href: 'https://github.com/BrooklynDipi', icon: '/icons/github.svg' },
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
          <span className="glyph" style={{ '--icon': `url(${link.icon})` } as CSSProperties} />
        </a>
      ))}
    </>
  )
}
