// Actions

const MODIFY_BANNER = 'MODIFY_BANNER';
const LOAD_ELEMENTS_IN_PROGRESS = 'LOAD_ELEMENTS_IN_PROGRESS';
const LOAD_ELEMENTS_SUCCESS = 'LOAD_ELEMENTS_SUCCESS';
const LOAD_ELEMENTS_FAILURE = 'LOAD_ROCKETS_FAILURE';
const LOAD_ELEMENT_DETAILS = 'LOAD_ELEMENT_DETAILS';
// Reducer
const InitialData = [
  {
    id: '1', name: 'Italy', number: '1', imgUrl: 'http://pngimg.com/uploads/chess/chess_PNG8443.png', details: { start: '1996', end: '2021' },
  },
  {
    id: '2', name: 'Italy', number: '2', imgUrl: 'http://pngimg.com/uploads/chess/chess_PNG8443.png', details: { start: '1996', end: '2022' },
  },
  {
    id: '3', name: 'Italy', number: '3', imgUrl: 'http://pngimg.com/uploads/chess/chess_PNG8443.png', details: { start: '1996', end: '2023' },
  },
  {
    id: '4', name: 'Italy', number: '4', imgUrl: 'http://pngimg.com/uploads/chess/chess_PNG8443.png', details: { start: '1996', end: '2024' },
  },
  {
    id: '5', name: 'Italy', number: '5', imgUrl: 'http://pngimg.com/uploads/chess/chess_PNG8443.png', details: { start: '1996', end: '2025' },
  },
  {
    id: '6', name: 'Italy', number: '6', imgUrl: 'http://pngimg.com/uploads/chess/chess_PNG8443.png', details: { start: '1996', end: '2026' },
  },
  {
    id: '7', name: 'Italy', number: '7', imgUrl: 'http://pngimg.com/uploads/chess/chess_PNG8443.png', details: { start: '1996', end: '2027' },
  },
  {
    id: '8', name: 'Italy', number: '8', imgUrl: 'http://pngimg.com/uploads/chess/chess_PNG8443.png', details: { start: '1996', end: '2028' },
  },
];

const InitialBanner = 'Banner Text';

const initialState = { isLoading: false, data: InitialData, banner: InitialBanner };
export const elementsReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ELEMENTS_SUCCESS: {
      const { elements } = payload;
      return { ...state, isLoading: false, data: elements };
    }
    case LOAD_ELEMENTS_IN_PROGRESS:
      return {
        ...state, isLoading: true,
      };
    case LOAD_ELEMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOAD_ELEMENT_DETAILS: {
      const { id, elemData } = payload;

      const addData = element => (element.anime_id === id ? { ...element, elemData } : element);

      return { ...state, data: state.data.map(addData) };
    }
    case MODIFY_BANNER: {
      return payload ? { ...state, banner: payload } : { ...state, banner: InitialBanner };
    }
    // do reducer stuff
    default: return state;
  }
};
// Action Creators
export const modifyBanner = obj => ({ type: MODIFY_BANNER, payload: obj });

const loadElementsInProgress = () => ({ type: LOAD_ELEMENTS_IN_PROGRESS });

const loadElementsSuccess = elements => ({ type: LOAD_ELEMENTS_SUCCESS, payload: { elements } });

const loadElementsFailure = () => ({ type: LOAD_ELEMENTS_FAILURE });

const AddElementDetails = (id, elemData) => (
  { type: LOAD_ELEMENT_DETAILS, payload: { id, elemData } });
// side effects, only as applicable
// e.g. thunks, epics, etc

export const loadElements = () => (
  async dispatch => {
    try {
      dispatch(loadElementsInProgress());
      const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
      const obj = await response.json();
      const elmentsData = await obj.data;
      dispatch(loadElementsSuccess(elmentsData));
    } catch (e) {
      dispatch(loadElementsFailure());
    }
  }
);

export const loadElementDetails = (id, animeName) => (
  async dispatch => {
    try {
      const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
      const obj = await response.json();
      const elmentsData = await obj.data;
      dispatch(AddElementDetails(id, elmentsData));
      dispatch(modifyBanner(id));
    } catch (e) {
      dispatch(loadElementsFailure());
    }
  }
);
