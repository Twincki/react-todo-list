import cx from 'classnames';
import styles from './MainPage.module.scss';
import { Search } from 'widgets/Search';
import { NumberTask } from 'widgets/NumberTask';
import { Button } from 'shared/ui/Button/Button';

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={cx(styles.mainpage, className)}>
      <Search />

      <div className={styles.root}>
        <NumberTask task="7" />
        <Button className={styles.button} size="small">
          ДОБАВИТЬ
        </Button>
      </div>

      <h1>MAIN PAGE</h1>
    </div>
  );
};
