import { Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout';
import AllMeetups from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';


function App() {
  return <div>
    <Layout>
      <Switch>

        <Route path='/' exact={true}>
          <AllMeetups />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetups />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  </div>;
}

export default App;
