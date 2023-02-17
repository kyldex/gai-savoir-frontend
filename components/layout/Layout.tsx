import { useLayoutEffect, useRef } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const headerHeight = useRef(176); // default value

  useLayoutEffect(() => {
    const headerElement = document.querySelector('header') as HTMLDivElement;
    if (headerElement) {
      headerHeight.current = headerElement.offsetHeight;
      console.log(headerHeight);
    }
  }, []);

  return (
    <div className={styles.page}>
      <Nav />
      <main
        className={styles.main}
        style={{ paddingTop: `${headerHeight.current}px` }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
