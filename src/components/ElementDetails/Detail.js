import { PropTypes } from 'prop-types';
import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './Detail.module.scss';

const Detail = props => {
  const { detail } = props;
  return (
    <div className={styles['detail-div']}>
      <div className={styles['right-div']}>
        {detail}
      </div>
      <div className={styles['left-div']}>
        <BsArrowRightCircle />
      </div>
    </div>
  );
};

export default Detail;

Detail.propTypes = {
  detail: PropTypes.isRequired,
};
