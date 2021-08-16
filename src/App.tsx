import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Detail } from 'views/Detail/Detail';
import { Money } from 'views/Money/Money';
import { TagDetail } from 'views/TagDetail/TagDetail';
import { NoMatch } from 'views/NoMatchs/NoMatchs';
import { Statistics } from 'views/Statistics/Statistics';


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
        <Route exact path="/tagDetail/:type">
        <TagDetail/>
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









