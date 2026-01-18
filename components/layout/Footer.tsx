import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>&copy; Gai Savoir {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
