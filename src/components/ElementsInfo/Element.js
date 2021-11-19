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
  const clickHanlder = () => {
    dispatch(modifyBanner(element.id));
  };
  return (
    <div className={styles['element-div']} key={element.id}>
      <NavLink to={`/details/${element.id}`} exact>
        <BsArrowRightCircle onClick={clickHanlder} color="white" className={styles['nav-arrow']} />
      </NavLink>
      <div className={styles.top}>
        <img src={element.imgUrl} alt="chess-family" />
      </div>
      <div className={styles.bottom}>
        {element.name}
        {element.number}
      </div>
    </div>
  );
};

export default Element;
