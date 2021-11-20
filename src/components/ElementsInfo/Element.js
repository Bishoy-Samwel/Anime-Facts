/* eslint-disable react/prop-types */
import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import styles from './Element.module.scss';
import { loadElementDetails, modifyBanner } from '../../redux/elements';

const Element = props => {
  const dispatch = useDispatch();
  const { element } = props;
  const animeName = (element.anime_name) ? element.anime_name.replace(/_/g, ' ') : '';
  const clickHanlder = () => {
    if (!element.elemData) {
      dispatch(loadElementDetails(element.anime_id, element.anime_name));
    }
    dispatch(modifyBanner({ text: animeName, img_url: element.anime_img }));
  };
  return (
    <div className={styles['element-div']} key={element.anime_id}>
      <NavLink to={`/details/${element.anime_id}`} exact>
        <BsArrowRightCircle onClick={clickHanlder} color="white" className={styles['nav-arrow']} />
      </NavLink>
      <div className={styles.top}>
        <img src={element.anime_img} alt={element.anime_img} />
      </div>
      <div className={styles.bottom}>
        {animeName}
        <br />
        {element.anime_id}
      </div>
    </div>
  );
};

export default Element;
