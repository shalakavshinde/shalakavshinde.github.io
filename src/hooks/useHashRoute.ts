import { useSyncExternalStore } from 'react';

const subscribe = (onChange: () => void) => {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
};

/** Current `window.location.hash`, re-rendering on change. Hash routing keeps GitHub Pages happy. */
export const useHashRoute = () => useSyncExternalStore(subscribe, () => window.location.hash);
