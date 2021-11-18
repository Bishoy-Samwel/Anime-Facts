import { MdArrowBackIos, MdSettings, MdOutlineMic } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.left}>
      <NavLink to="/rockets">
        <MdArrowBackIos color="white" size="20" />
      </NavLink>
    </div>
    <p> page name </p>
    <div className={styles.right}>
      <MdOutlineMic color="white" size="20" />
      <MdSettings color="white" size="20" />
    </div>
  </header>
);

export default Header;
