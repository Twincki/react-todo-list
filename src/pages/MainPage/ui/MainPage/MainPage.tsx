import cx from 'classnames';
import styles from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={cx(styles.mainpage, className)}>
      <h1>MAIN PAGE</h1>
    </div>
  )
}