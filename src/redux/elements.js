// Actions
const LOAD_ELEMENTS = 'LOAD_ELEMENTS';
const MODIFY_BANNER = 'MODIFY_BANNER';
// Reducer
const InitialData = [
  {
    id: '1', name: 'Italy', number: '1', details: { start: '1996', end: '2021' },
  },
  {
    id: '2', name: 'Italy', number: '2', details: { start: '1996', end: '2022' },
  },
  {
    id: '3', name: 'Italy', number: '3', details: { start: '1996', end: '2023' },
  },
  {
    id: '4', name: 'Italy', number: '4', details: { start: '1996', end: '2024' },
  },
  {
    id: '5', name: 'Italy', number: '5', details: { start: '1996', end: '2025' },
  },
  {
    id: '6', name: 'Italy', number: '6', details: { start: '1996', end: '2026' },
  },
  {
    id: '7', name: 'Italy', number: '7', details: { start: '1996', end: '2027' },
  },
  {
    id: '8', name: 'Italy', number: '8', details: { start: '1996', end: '2028' },
  },
];

const InitialBanner = 'Banner Text';

const initialState = { data: InitialData, banner: InitialBanner };
export const elementsReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ELEMENTS: {
      return state.data;
    }
    case MODIFY_BANNER: {
      return payload ? { ...state, banner: payload } : { ...state, banner: InitialBanner };
    }
    // do reducer stuff
    default: return state;
  }
};
// Action Creators
export const loadElements = () => ({ type: LOAD_ELEMENTS });
export const modifyBanner = obj => ({ type: MODIFY_BANNER, payload: obj });

// side effects, only as applicable
// e.g. thunks, epics, etc
