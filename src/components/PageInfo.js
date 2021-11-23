import { PropTypes } from 'prop-types';
import styles from './PageInfo.module.scss';

function PageInfo(props) {
  const { title } = props;
  return (
    <div className={styles['page-info']}>
      <p>{title}</p>
    </div>
  );
}

export default PageInfo;

PageInfo.propTypes = {
  title: PropTypes.string.isRequired,
};
