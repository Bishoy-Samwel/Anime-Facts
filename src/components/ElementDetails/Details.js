import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getElement, detailsIsLoading } from '../selectors';
import Detail from './Detail';

const Details = () => {
  const itemId = Number(useParams().itemId);
  const element = useSelector(getElement(itemId));
  const detailsLoading = useSelector(detailsIsLoading);

  if (!detailsLoading && element.elemData) {
    return (element.elemData.map(detail => <Detail key={element.anime_id} detail={detail.fact} />));
  }
  return ('wait a minute');
};

Element.propTypes = {
  element: PropTypes.shape.isRequired,
};

export default Details;
