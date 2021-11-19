import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Element from './Element';
import styles from './Elements.module.scss';
import { getElements } from '../selectors';
import { loadElements } from '../../redux/elements';

const Elements = () => {
  const dispatch = useDispatch();
  const elements = useSelector(getElements);
  useEffect(() => elements.length < 10 && dispatch(loadElements()), []);
  return (
    <div className={styles['elements-div']}>
      {
        elements.map(element => <Element key={element.anime_id} element={element} />)
      }
    </div>
  );
};

export default Elements;
