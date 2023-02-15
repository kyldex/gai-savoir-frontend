import Nav from './Nav';
import Footer from './Footer';
import styles from './Layout.module.scss';

import { vercettiFont } from '../../utils/fontModule';

interface Props {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`${styles["page"]} ${vercettiFont.className}`}>
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
