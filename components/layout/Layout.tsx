import Nav from './Nav';
import Footer from './Footer';
import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
