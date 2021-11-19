import { createSelector } from 'reselect';

export const getElements = state => state.elements.data;
export const getElement = id => createSelector(
  [getElements], elements => elements.filter(element => element.anime_id === id),
);
