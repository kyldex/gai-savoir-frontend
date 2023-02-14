import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>&copy; Gai Savoir 2023</div>
    </footer>
  );
};

export default Footer;
