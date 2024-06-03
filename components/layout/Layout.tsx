'use client';

import { useState } from 'react';

import styles from './Layout.module.scss';

import Nav from './Nav';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(71); // default mobile value

  return (
    <div className={styles.page}>
      <Nav setHeaderHeight={setHeaderHeight}/>
      <main className={styles.main} style={{ paddingTop: `${headerHeight}px` }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
