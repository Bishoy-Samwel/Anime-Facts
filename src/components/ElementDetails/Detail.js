import React from 'react';
import { useParams } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';
import styles from './Detail.module.scss';

const Detail = props => {
  const { detail } = props;
  const { itemId } = useParams();

  return (
    <div className={styles['detail-div']} key={detail.id}>
      <div className={styles['right-div']}>
        {detail.name}
        +
        {itemId}

      </div>
      <div className={styles['left-div']}>
        <span>
          {detail.number}
        </span>
        <BsArrowRightCircle />
      </div>
    </div>
  );
};

Detail.propTypes = {
  detail: PropTypes.shape.isRequired,
};

export default Detail;
