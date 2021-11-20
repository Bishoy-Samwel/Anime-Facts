import { useSelector } from 'react-redux';
import styles from './Banner.module.scss';

const Banner = () => {
  const banner = useSelector(state => state.elements.banner);
  const content = text => (
    <div className={styles['banner-div']}>
      <div className={styles['element-left']}>
        <img src={banner.img_url} alt="Anime`" />
      </div>
      <div className={styles['element-right']}>
        {text}
      </div>
    </div>
  );

  return (
    content(banner.text)
  );
};

export default Banner;
