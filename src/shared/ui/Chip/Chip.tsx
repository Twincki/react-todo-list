import styles from './Chip.module.scss';
import cx from 'classnames';

interface ChipProps {
  taskStatus?: string;
}

export const Chip = (props: ChipProps) => {
  const { taskStatus } = props;

  return <div className={cx(styles.root, styles.awaiting)}>{taskStatus}</div>;
};
