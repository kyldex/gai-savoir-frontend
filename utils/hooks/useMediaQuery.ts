import { useState, useEffect } from 'react';

/**
 * Custom hook to conditionally render things based on the
 * browser size rather than render something and hide it with CSS.
 * More info : https://www.netlify.com/blog/2020/12/05/building-a-custom-react-media-query-hook-for-more-responsive-apps/
 * @param {string} query A media query string, such as '(max-width: 599px)'.
 * @returns {boolean}
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // MediaQueryList object
    const mql = window.matchMedia(query);

    if (mql.matches !== matches) {
      setMatches(mql.matches);
    }

    const listener = () => {
      setMatches(mql.matches);
    };

    // Fires only when the status of media query support changes.
    mql.addEventListener('change', listener);

    return () => mql.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
