import React from 'react';
import PropTypes from 'prop-types';
import styles from './Details.module.scss';
import Detail from './Detail';

export const Details = () => {
  const details = [
    { id: '1', name: 'Italy', number: '1' },
    { id: '2', name: 'Italy', number: '2' },
    { id: '3', name: 'Italy', number: '3' },
    { id: '4', name: 'Italy', number: '4' },
    { id: '5', name: 'Italy', number: '5' },
    { id: '6', name: 'Italy', number: '6' },
    { id: '7', name: 'Italy', number: '7' },
  ];
  return (
    <div className={styles['details-div']}>
      {
        details.map(detail => <Detail key={detail.id} detail={detail} />)
      }
    </div>
  );
};

Element.propTypes = {
  element: PropTypes.shape.isRequired,
};

export default Element;
