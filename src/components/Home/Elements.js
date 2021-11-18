import React from 'react';
import Element from '../Details/Element';
import styles from './Elements.module.scss';

const Elements = () => {
  const elements = [
    { id: '1', name: 'Italy', number: '1' },
    { id: '2', name: 'Italy', number: '2' },
    { id: '3', name: 'Italy', number: '3' },
    { id: '4', name: 'Italy', number: '4' },
    { id: '5', name: 'Italy', number: '5' },
    { id: '6', name: 'Italy', number: '6' },
    { id: '7', name: 'Italy', number: '7' },
  ];
  return (
    <div className={styles['elements-div']}>
      {
        elements.map(element => <Element key={element.id} element={element} />)
      }
    </div>
  );
};

export default Elements;
