import { useEffect, useState } from 'react'

type Props = {
  words: string[]
  interval: number
}

export default function RollingText({ words, interval }: Props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (words.length < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className="rolling">
      {/* Screen readers get the whole list once instead of constant updates */}
      <span className="visually-hidden">{words.join(', ')}</span>
      {/* The key change remounts the word, which replays the roll-in animation */}
      <span key={index} className="rolling__word" aria-hidden="true">
        {words[index]}
      </span>
    </span>
  )
}
