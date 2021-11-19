import { useSelector } from 'react-redux';
import styles from './Banner.module.scss';

const Banner = () => {
  const text = useSelector(state => state.elements.banner);
  const content = text => (
    <div className={styles['banner-div']}>
      <div className={styles['element-left']}>
        <img src="http://pngimg.com/uploads/chess/chess_PNG8443.png" alt="chess-family" />
      </div>
      <div className={styles['element-right']}>
        {text}
      </div>
    </div>
  );

  return (
    content(text)
  );
};

export default Banner;
