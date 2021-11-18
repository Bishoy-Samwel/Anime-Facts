import Header from './Header';
import Banner from './Home/Banner';
import styles from './Container.module.scss';
import PageInfo from './PageInfo';
import Elements from './ElementsInfo/Elements';
// import { Details } from './ElementDetails/Details';

function Container() {
  return (
    <div className={styles.container}>
      <Header />
      <PageInfo />
      <Banner />
      <Elements />
      {/* <Details /> */}
    </div>
  );
}

export default Container;
