import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Money } from 'views/money/Money';
import { NoMatch } from 'views/NoMatch';
import { Statistics } from 'views/Statistics';
import { Tags } from 'views/Tags';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path="/money">
          <Money />
        </Route>
        <Route exact path="/statistics">
          <Statistics />
        </Route>
        {/* 重定向 */}
        <Redirect exact from="/" to="/tags"></Redirect>
        {/* 404 */}
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}














export default App;









