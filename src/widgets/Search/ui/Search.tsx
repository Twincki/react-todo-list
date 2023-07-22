import { AiOutlineSearch } from 'react-icons/ai';
import styles from './Search.module.scss';

export const Search = () => {
  return (
    <label className={styles.root}>
      <AiOutlineSearch className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        placeholder="Поиск любой задачи"
      />
    </label>
  );
};
