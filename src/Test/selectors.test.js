import { expect } from 'chai';
import { getElement } from '../components/selectors';

describe('Test selectors', () => {
  it('Returns specific element depend on id', () => {
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
      anime_id: 1,
      anime_name: 'bleach',
      anime_img: 'https://eaxmpleimage.com/',
    };
    const actual = getElement(1).resultFunc(initialState.data);
    expect(actual).to.deep.equal(expected);
  });
});
