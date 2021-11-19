import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './Details.module.scss';
import Detail from './Detail';
import { getElement } from '../selectors';

export const Details = () => {
  const { details } = useSelector(getElement('1'))[0];
  return (
    <div className={styles['details-div']}>
      {
        // eslint-disable-next-line max-len
        Object.keys(details).map(detailKey => <Detail key={detailKey} detailKey={detailKey} detail={details[detailKey]} />)
      }
    </div>
  );
};

Element.propTypes = {
  element: PropTypes.shape.isRequired,
};

export default Element;
