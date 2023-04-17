import { useLayoutEffect, useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(77); // default value

  useLayoutEffect(() => {
    const headerElement = document.querySelector('header') as HTMLDivElement;
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }
  }, []);

  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main} style={{ paddingTop: `${headerHeight}px` }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
