import { FC } from 'react';

import styles from './LadderDesktopIcon.module.scss';

type Props = {
  className: string;
};

// Allows animating svg parts.
const LadderDesktopIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Calque_2"
      data-name="Calque 2"
      viewBox="0 0 255.35 342.72"
      className={className}
    >
      <g id="Calque_1-2" data-name="Calque 1">
        <path
          d="M89.99 136.5h8.44v206.22h-8.44zM141.8 136.5h8.44v206.22h-8.44z"
          className={styles.cls1}
        />
        <path
          d="M93.34 310.53h57.14v13.3H93.34zM91.82 264.31h57.14v13.3H91.82zM90.3 218.09h57.14v13.3H90.3zM91.05 171.87h57.14v13.3H91.05z"
          className={styles.cls1}
        />

        <path
          d="M250.9 70.43c5.13 15.09-7.44 30.36-28.07 34.12-14.3 2.6-28.71-1.02-37.92-8.51-6.21 9.96-21.41 17.28-39.59 17.88-16.68.55-31.56-4.71-39.63-12.94-6.62 6.7-17.38 11.06-29.54 11.06-19.07 0-34.71-10.72-36.28-24.38C17.5 86.11 0 72.33 0 55.56S17.77 24.8 40.39 23.42c4.02-12.23 19.07-21.31 37-21.31 11.3 0 21.44 3.6 28.41 9.32C114.19 4.5 127.72 0 142.99 0c16.39 0 30.79 5.18 38.98 13 7.75-4.72 17.66-7.56 28.48-7.56 24.8 0 44.9 14.92 44.9 33.31 0 8.29-4.1 15.87-10.85 21.71 2.92 2.9 5.14 6.26 6.4 9.97Z"
          className={styles.cls2}
        />
      </g>
    </svg>
  );
};

export default LadderDesktopIcon;
