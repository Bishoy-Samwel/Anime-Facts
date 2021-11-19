import React from 'react';
import { useSelector } from 'react-redux';
import Element from './Element';
import styles from './Elements.module.scss';
import { getElements } from '../selectors';

const Elements = () => {
  const elements = useSelector(getElements);
  return (
    <div className={styles['elements-div']}>
      {
        elements.map(element => <Element key={element.id} element={element} />)
      }
    </div>
  );
};

export default Elements;
