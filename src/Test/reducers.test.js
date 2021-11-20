import { expect } from 'chai';
import { elementsReducer } from '../redux/elements';

describe('The elements reducer', () => {
  it('Add the filter term to the state!', () => {
    const fakeAction = {
      type: 'FILTER_EMENETS',
      payload: 'bleach',
    };

    const initialState = {
      elementsIsLoading: false,
      detailsIsLoading: false,
      data: [
        {
          anime_id: 1,
          anime_name: 'bleach',
          anime_img: 'https://eaxmpleimage.com/',
        },
        {
          anime_id: 2,
          anime_name: 'black_clover',
          anime_img: 'https://eaxmpleimage2.com/',
        }],
      filter: '',
    };

    const expected = {
      elementsIsLoading: false,
      detailsIsLoading: false,
      data: [
        {
          anime_id: 1,
          anime_name: 'bleach',
          anime_img: 'https://eaxmpleimage.com/',
        },
        {
          anime_id: 2,
          anime_name: 'black_clover',
          anime_img: 'https://eaxmpleimage2.com/',
        }],
      filter: 'bleach',
    };

    const actual = elementsReducer(initialState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
  it('Modifythe banner data!', () => {
    const fakeAction = {
      type: 'MODIFY_BANNER',
      payload: { text: 'expected test', img_url: 'expected-url' },
    };

    const initialState = {
      elementsIsLoading: false,
      detailsIsLoading: false,
      data: [
        {
          anime_id: 1,
          anime_name: 'bleach',
          anime_img: 'https://eaxmpleimage.com/',
        },
        {
          anime_id: 2,
          anime_name: 'black_clover',
          anime_img: 'https://eaxmpleimage2.com/',
        }],
      filter: '',
      banner: { text: 'test text', img_url: 'text url' },
    };

    const expected = {
      elementsIsLoading: false,
      detailsIsLoading: false,
      data: [
        {
          anime_id: 1,
          anime_name: 'bleach',
          anime_img: 'https://eaxmpleimage.com/',
        },
        {
          anime_id: 2,
          anime_name: 'black_clover',
          anime_img: 'https://eaxmpleimage2.com/',
        }],
      filter: '',
      banner: { text: 'expected test', img_url: 'expected-url' },
    };

    const actual = elementsReducer(initialState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
});
