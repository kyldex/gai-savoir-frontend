import { FC } from 'react';

import styles from './MegaphoneIcon.module.scss';

type Props = {
  className: string;
}

// Allows animating svg parts.
const MegaphoneIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Calque_2"
      data-name="Calque 2"
      viewBox="0 0 376.65 115.34"
      className={className}
    >
      <g id="Calque_1-2" data-name="Calque 1">
        <path d="m337.83 21.59 30.59-12.15" className={styles.cls1} />
        <path
          d="M297.45 108.98 15.94 73.31V40.36L297.45 4.69v104.29z"
          className={styles.cls2}
        />
        <path
          d="M0 34.88h15.94v43.91H0zM294.05 0h15.94v113.67h-15.94z"
          className={styles.cls3}
        />
        <path
          d="M62.27 72.57s10.92 71.73 77.15 12.04"
          className={styles.cls4}
        />
        <path
          d="m366.85 98.83-30.58-12.16M350.77 53.74h25.88"
          className={styles.cls1}
        />
      </g>
    </svg>
  );
};

export default MegaphoneIcon;
