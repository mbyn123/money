import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Detail } from 'views/Detail';
import { Money } from 'views/Money';
import { NoMatch } from 'views/NoMatchs';
import { Statistics } from 'views/Statistics';
import { TagDetail } from 'views/TagDetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/detail">
          <Detail />
        </Route>
        <Route exact path="/money">
          <Money />
        </Route>
        <Route exact path="/tagDetail">
          <TagDetail />
        </Route>
        <Route exact path="/statistics">
          <Statistics />
        </Route>
        {/* 重定向 */}
        <Redirect exact from="/" to="/detail"></Redirect>
        {/* 404 */}
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}














export default App;









