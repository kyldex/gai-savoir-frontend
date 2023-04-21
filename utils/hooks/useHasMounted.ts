// https://www.joshwcomeau.com/snippets/react-hooks/use-has-mounted/
import { useEffect, useState } from 'react';

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

export default useHasMounted;
