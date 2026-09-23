export type Category = {
  label: string
  href: string
  /** CSS font-family for this entry. Load web fonts in index.html. */
  font: string
}

// The radial menu spaces however many there are evenly around the logo.
export const categories: Category[] = [
  { label: 'Projects', href: '#projects', font: "'Syne', sans-serif" },
  { label: 'Gallery', href: '#gallery', font: "'Playfair Display', serif" },
  { label: 'Blog', href: '#blog', font: "'Caveat', cursive" },
  { label: 'Résumé', href: '#resume', font: "'Special Elite', monospace" },
  { label: 'Contact', href: '#contact', font: "'DM Mono', monospace" },
  { label: 'About', href: '#about', font: "'Bebas Neue', sans-serif" },
]
