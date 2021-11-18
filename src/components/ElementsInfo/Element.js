import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './Element.module.scss';

const Element = props => {
  const { element } = props;
  return (
    <div className={styles['element-div']} key={element.id}>
      <BsArrowRightCircle className={styles['nav-arrow']} />
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
