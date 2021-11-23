import { createSelector } from 'reselect';

export const elementsIsLoading = state => state.elements.elementsIsLoading;
export const detailsIsLoading = state => state.elements.detailsIsLoading;
export const getFilterTerm = state => state.elements.filter;
export const getElements = state => state.elements.data.slice(0, 12);

export const getElement = id => createSelector(
  [getElements], elements => elements.filter(
    element => element.anime_id === id,
  )[0],
);
