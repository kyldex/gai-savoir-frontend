import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

import styles from './DesktopMenu.module.scss';

type LinkProps = {
  href: string;
  children: ReactNode;
};
const Link: FC<LinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <NextLink href={href} className={styles.navigationMenuLink}>
        {children}
      </NextLink>
    </NavigationMenu.Link>
  );
};

const DesktopMenu: FC = () => {
  return (
    <NavigationMenu.Root className={styles.navigationMenuRoot}>
      <NavigationMenu.List className={styles.navigationMenuList}>
        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <Link href="/evenements">ÉVÈNEMENTS</Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <NavigationMenu.Trigger className={styles.navigationMenuTrigger}>
            ARTICLES
            <CaretDownIcon className={styles.caretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.navigationMenuContent}>
            <ul className={`${styles.contentList} ${styles.articles}`}>
              <li>
                <Link href="/evenements">Actualités</Link>
              </li>
              <li>
                <Link href="/evenements">Idées</Link>
              </li>
              <li>
                <Link href="/evenements">Sommes-nous tous fous ?</Link>
              </li>
              <li>
                <Link href="/evenements">Numérique</Link>
              </li>
              <li>
                <Link href="/evenements">Culture</Link>
              </li>
              <li>
                <Link href="/evenements">Société</Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <NavigationMenu.Trigger className={styles.navigationMenuTrigger}>
            PRODUCTION AUDIOVISUELLE
            <CaretDownIcon className={styles.caretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.navigationMenuContent}>
            <ul
              className={`${styles.contentList} ${styles.audiovisual}`}
            >
              <li>
                <Link href="/evenements">Portraits de Français</Link>
              </li>
              <li>
                <Link href="/evenements">Interviews</Link>
              </li>
              <li>
                <Link href="/evenements">Contributions externes</Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <Link href="/contributeurs">CONTRIBUTEURS</Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <Link href="/observatoire-des-perceptions">
            OBSERVATOIRE DES PERCEPTIONS
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <Link href="/apropos">À PROPOS</Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default DesktopMenu;
