import { useDispatch } from 'react-redux';
import { filterElements } from '../redux/elements';
import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  return (
    <form>

      <div className={styles['search-box']}>
        <input
          onChange={e => {
            dispatch(filterElements(e.target.value.toLowerCase()));
          }}
          type="text"
          className="search-by-name"
          name="name"
          placeholder="Search Animes by Name"
        />
      </div>
    </form>
  );
};

export default Search;
