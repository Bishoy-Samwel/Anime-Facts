import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Element from './Element';
import styles from './Elements.module.scss';
import { getElements, getFilterTerm } from '../selectors';
import { loadElements } from '../../redux/elements';

const Elements = () => {
  const dispatch = useDispatch();
  const elements = useSelector(getElements);
  const term = useSelector(getFilterTerm);
  let filtered = elements;
  if (elements.length > 10) {
    filtered = elements.filter(
      element => element.anime_name.toLowerCase().includes(term),
    );
    if (term === '') { filtered = elements; }
  }

  useEffect(() => elements.length < 10 && dispatch(loadElements()), []);
  return (
    <div className={styles['elements-div']}>
      {
        filtered.map(element => <Element key={element.anime_id} element={element} />)
      }
    </div>
  );
};

export default Elements;
