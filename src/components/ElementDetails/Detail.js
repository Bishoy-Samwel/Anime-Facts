/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './Detail.module.scss';

const Detail = props => {
  const { detailKey, detail } = props;
  const { itemId } = useParams();
  return (
    <div className={styles['detail-div']} key={detail}>
      <div className={styles['right-div']}>
        {detailKey}
        {' '}
        +
        {' '}
        {detail}

      </div>
      <div className={styles['left-div']}>
        <span>
          {itemId}
        </span>
        <BsArrowRightCircle />
      </div>
    </div>
  );
};

export default Detail;
