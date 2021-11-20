// Actions

const MODIFY_BANNER = 'MODIFY_BANNER';
const LOAD_ELEMENTS_IN_PROGRESS = 'LOAD_ELEMENTS_IN_PROGRESS';
const LOAD_ELEMENTS_SUCCESS = 'LOAD_ELEMENTS_SUCCESS';
const LOAD_ELEMENTS_FAILURE = 'LOAD_ROCKETS_FAILURE';
const LOAD_ELEMENT_DATA_IN_PROGRESS = 'LOAD_ELEMENT_DATA_IN_PROGRESS';
const LOAD_ELEMENT_DATA_SUCCESS = 'LOAD_ELEMENT_DATA_SUCCESS';
const LOAD_ELEMENT_DATA_FAILURE = 'LOAD_ELEMENT_DATA_FAILURE';
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
];

const imgUrl = 'https://www.pngall.com/wp-content/uploads/2/Manga-PNG-Picture.png';
const text = 'Did you know!!';

const initialState = {
  elementsIsLoading: false,
  detailsIsLoading: false,
  data: InitialData,
  banner: { text, img_url: imgUrl },
};
export const elementsReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ELEMENTS_SUCCESS: {
      const { elements } = payload;
      return {
        ...state, elementsIsLoading: false, data: elements,
      };
    }
    case LOAD_ELEMENTS_IN_PROGRESS:
      return {
        ...state, elementsIsLoading: true,
      };
    case LOAD_ELEMENTS_FAILURE:
      return {
        ...state,
        elementsIsLoading: false,
      };

    case LOAD_ELEMENT_DATA_SUCCESS: {
      const { id, elemData } = payload;
      const addData = element => (element.anime_id === id ? { ...element, elemData } : element);
      const newState = { ...state, detailsIsLoading: false, data: state.data.map(addData) };
      return newState;
    }
    case LOAD_ELEMENT_DATA_IN_PROGRESS: {
      return {
        ...state, detailsIsLoading: true,
      };
    }
    case LOAD_ELEMENT_DATA_FAILURE:
      return {
        ...state,
        detailsIsLoading: false,
      };

    case MODIFY_BANNER: {
      return payload ? { ...state, banner: payload }
        : { ...state, banner: { ...state.baner, text, img_url: imgUrl } };
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

const loadElementDataInProgress = () => ({ type: LOAD_ELEMENTS_IN_PROGRESS });

const loadElementDataSuccess = (id, elemData) => (
  { type: LOAD_ELEMENT_DATA_SUCCESS, payload: { id, elemData } });

const loadElementDataFailure = () => ({ type: LOAD_ELEMENTS_FAILURE });

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
      dispatch(loadElementDataInProgress());
      const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
      const obj = await response.json();
      const elmentsData = await obj.data;
      dispatch(loadElementDataSuccess(id, elmentsData));
    } catch (e) {
      dispatch(loadElementDataFailure());
    }
  }
);
