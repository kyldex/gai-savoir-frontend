import {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef
} from 'react';

import styles from './Nav.module.scss';

import { useDeviceContext } from '../../context/DeviceContext';
import DesktopMenu from '../menu/DesktopMenu';
import MobileMenuBar from '../menu/MobileMenuBar';

import useHasMounted from '../../utils/hooks/useHasMounted';

type Props = {
  setHeaderHeight: Dispatch<SetStateAction<number>>;
};

const Nav: FC<Props> = ({ setHeaderHeight }) => {
  const hasMounted = useHasMounted();
  const { isDesktop } = useDeviceContext();
  const headerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (hasMounted && headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [hasMounted, setHeaderHeight]);

  // TODO: ok pour SEO ?
  if (!hasMounted) {
    return null;
  }

  // Client only
  return (
    <header className={styles.header} ref={headerRef}>
      {isDesktop ? (
        <DesktopMenu />
      ) : (
        <nav role="navigation" aria-label="Menu principal">
          <MobileMenuBar />
        </nav>
      )}
    </header>
  );
};

export default Nav;
