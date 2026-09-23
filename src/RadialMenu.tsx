import type { CSSProperties } from 'react'
import type { Category } from './categories'

type Props = {
  items: Category[]
  logoSrc: string
  logoAlt: string
}

// How far the arc wraps around the logo, in degrees. Larger = more curved.
const ARC_SPREAD = 70

/**
 * Where each item sits on an arc centered on the logo.
 * angle: degrees from horizontal (negative = above center), so each label
 *   tilts like a spoke coming out of the logo.
 * indent: how far it pushes out, 0 for the top and bottom items, 1 for the middle.
 */
function arcPosition(i: number, count: number) {
  if (count < 2) return { angle: 0, indent: 1 }
  const half = ARC_SPREAD / 2
  const angle = (i / (count - 1)) * 2 * half - half
  const rad = (deg: number) => (deg * Math.PI) / 180
  const indent = (Math.cos(rad(angle)) - Math.cos(rad(half))) / (1 - Math.cos(rad(half)))
  return { angle, indent }
}

export default function RadialMenu({ items, logoSrc, logoAlt }: Props) {
  return (
    <nav className="radial" aria-label="Main">
      <img className="logo" src={logoSrc} alt={logoAlt} />
      <ul>
        {items.map((item, i) => {
          const { angle, indent } = arcPosition(i, items.length)
          return (
            <li
              key={item.href}
              style={
                {
                  '--angle': `${angle}deg`,
                  '--indent': indent,
                  fontFamily: item.font,
                } as CSSProperties
              }
            >
              <a href={item.href}>{item.label}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
