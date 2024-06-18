import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

import styles from './DesktopMenu.module.scss';

import { CATEGORIES, SUBCATEGORIES } from '../../utils/constants';

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
          <Link href="/evenements">{CATEGORIES.EVENTS.toUpperCase()}</Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <NavigationMenu.Trigger className={styles.navigationMenuTrigger}>
            {CATEGORIES.ARTICLES.toUpperCase()}
            <CaretDownIcon className={styles.caretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.navigationMenuContent}>
            <ul className={`${styles.contentList} ${styles.articles}`}>
              <li>
                <Link href="/articles/actualites">{SUBCATEGORIES.NEWS}</Link>
              </li>
              <li>
                <Link href="/articles/idees">{SUBCATEGORIES.IDEAS}</Link>
              </li>
              <li>
                <Link href="/articles/sommes-nous-tous-fous">
                  {SUBCATEGORIES.CRAZY}
                </Link>
              </li>
              <li>
                <Link href="/articles/numerique">{SUBCATEGORIES.DIGITAL}</Link>
              </li>
              <li>
                <Link href="/articles/culture">{SUBCATEGORIES.CULTURE}</Link>
              </li>
              <li>
                <Link href="/articles/societe">{SUBCATEGORIES.SOCIETY}</Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <NavigationMenu.Trigger className={styles.navigationMenuTrigger}>
            {CATEGORIES.AUDIOVISUAL_PRODUCTION.toUpperCase()}
            <CaretDownIcon className={styles.caretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.navigationMenuContent}>
            <ul className={`${styles.contentList} ${styles.audiovisual}`}>
              <li>
                <Link href="/evenements">{SUBCATEGORIES.FRENCH_PORTRAITS}</Link>
              </li>
              <li>
                <Link href="/evenements">{SUBCATEGORIES.INTERVIEWS}</Link>
              </li>
              <li>
                <Link href="/evenements">
                  {SUBCATEGORIES.EXTERNAL_CONTRIBUTIONS}
                </Link>
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
