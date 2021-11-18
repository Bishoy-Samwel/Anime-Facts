import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import styles from './Element.module.scss';

const Element = props => {
  const { element } = props;
  return (
    <div className={styles['element-div']} key={element.id}>
      <NavLink to={`/details/${element.id}`} exact>
        <BsArrowRightCircle color="white" className={styles['nav-arrow']} />
      </NavLink>
      <div className={styles.top}>
        <img src="http://pngimg.com/uploads/chess/chess_PNG8443.png" alt="chess-family" />
      </div>
      <div className={styles.bottom}>
        {element.name}
        {element.number}
      </div>
    </div>
  );
};

Element.propTypes = {
  element: PropTypes.shape.isRequired,
};

export default Element;
