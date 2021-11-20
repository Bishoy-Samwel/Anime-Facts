import {
  Switch,
  Route,
  // useParams,
} from 'react-router-dom';
import Header from './Header';
import styles from './Container.module.scss';
import PageInfo from './PageInfo';
import Banner from './ElementsInfo/Banner';
import Elements from './ElementsInfo/Elements';
import Details from './ElementDetails/Details';
import Search from './Search';

function Container() {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/">
          <Header title="Animes Facts" />
          <Banner />
          <PageInfo title="List of Animes" />
          <Search />
          <Elements />
        </Route>
        <Route path="/details/:itemId">
          <Header title="Facts" />
          <Banner />
          <PageInfo title="Anime facts" />
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
