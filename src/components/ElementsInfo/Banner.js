import styles from './Banner.module.scss';

const Banner = () => (
  <div className={styles['banner-div']}>
    <div className={styles['element-left']}>
      <img src="http://pngimg.com/uploads/chess/chess_PNG8443.png" alt="chess-family" />
    </div>
    <div className={styles['element-right']}>
      Name
    </div>
  </div>
);

export default Banner;
