import styles from './NumberTask.module.scss';

interface NumberTaskProps {
  task?: string;
}

export const NumberTask = (props: NumberTaskProps) => {
  const { task } = props;

  return (
    <p className={styles.text}>
      У вас сегодня
      <span className={styles.task}> {task} задач </span>
    </p>
  );
};
