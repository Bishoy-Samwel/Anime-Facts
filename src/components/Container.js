import Header from './Header';
import Elements from './Home/Elements';
import Banner from './Home/Banner';
import styles from './Container.module.scss';
import PageInfo from './PageInfo';

function Container() {
  return (
    <div className={styles.container}>
      <Header />
      <PageInfo />
      <Banner />
      <Elements />
    </div>
  );
}

export default Container;
