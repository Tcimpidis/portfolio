import { FC } from 'react';
import styles from './index.module.css';

export const LoadingSpinner: FC = () => (
  <div className={styles.lds_ring}><div></div><div></div><div></div><div></div></div>
)