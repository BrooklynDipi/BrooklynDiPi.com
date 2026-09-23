import type { Category } from './categories'

export default function ComingSoon({ category }: { category: Category }) {
  return (
    <main className="page coming-soon">
      <h2 style={{ fontFamily: category.font }}>{category.label}</h2>
      <p>Coming soon</p>
    </main>
  )
}
