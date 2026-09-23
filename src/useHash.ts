import { useSyncExternalStore } from 'react'

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

/** The current URL hash (e.g. "#projects"), updating as links are followed. */
export function useHash() {
  return useSyncExternalStore(subscribe, () => window.location.hash)
}
