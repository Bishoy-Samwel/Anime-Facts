/* eslint-disable react/prop-types */
import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Element.module.scss';
import { modifyBanner } from '../../redux/elements';

const Element = props => {
  const dispatch = useDispatch();
  const { element } = props;
  const animeName = (element.anime_name) ? element.anime_name.replace(/_/g, ' ') : '';
  const clickHanlder = () => {
    dispatch(modifyBanner(element.anime_id));
  };
  return (
    <div className={styles['element-div']} key={element.anime_id}>
      <NavLink to={`/details/${element.anime_id}`} exact>
        <BsArrowRightCircle onClick={clickHanlder} color="white" className={styles['nav-arrow']} />
      </NavLink>
      <div className={styles.top}>
        <img src={element.anime_img} alt="chess-family" />
      </div>
      <div className={styles.bottom}>
        {animeName}
      </div>
    </div>
  );
};

export default Element;
