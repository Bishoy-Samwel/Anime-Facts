import { PropTypes } from 'prop-types';
import { MdArrowBackIos, MdSettings, MdOutlineMic } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { modifyBanner } from '../redux/elements';
import styles from './Header.module.scss';

const Header = props => {
  const dispactch = useDispatch();
  const { title } = props;
  const clickHanlder = () => {
    dispactch(modifyBanner());
  };
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <NavLink to="/">
          <MdArrowBackIos onClick={clickHanlder} color="white" size="20" />
        </NavLink>
      </div>
      <p>
        {' '}
        {title}
        {' '}
      </p>
      <div className={styles.right}>
        <MdOutlineMic color="white" size="20" />
        <MdSettings color="white" size="20" />
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
