import Nav from './Nav';
import Footer from './Footer';
import styles from './Layout.module.css';

interface Props {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
