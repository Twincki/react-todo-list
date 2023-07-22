import cx from 'classnames';
import styles from './MainPage.module.scss';
import { Search } from 'widgets/Search';

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={cx(styles.mainpage, className)}>
      <Search />
      <h1>MAIN PAGE</h1>
    </div>
  );
};
