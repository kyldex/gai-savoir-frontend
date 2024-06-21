import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import styles from './MenuLink.module.scss';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const MenuLink: FC<Props> = ({ href, children, className, onClick }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <NextLink
        href={href}
        className={`${styles.menuLink}${className ? ` ${className}` : ''}`}
        onClick={onClick}
      >
        {children}
      </NextLink>
    </NavigationMenu.Link>
  );
};

export default MenuLink;
