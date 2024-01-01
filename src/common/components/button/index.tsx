import { FC, PropsWithChildren } from 'react';
import styles from './index.module.css';

interface ButtonProps {
  onClick: () => void | Promise<void>;
  className?: string;
  disabled?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className,
  children,
  onClick,
  disabled
}) => (
  <button className={`${styles.button} ${className}` } disabled={disabled} onClick={onClick}>
    {children}
  </button>
)