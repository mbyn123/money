import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Bill } from 'views/Bill/Bill';
import { Money } from 'views/Money/Money';
import { TagDetail } from 'views/TagDetail/TagDetail';
import { NoMatch } from 'views/NoMatchs/NoMatchs';
import { Statistics } from 'views/Statistics/Statistics';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/bill" component={Bill} />
        <Route exact path="/money" component={Money} />
        <Route exact path="/tagDetail/:type" component={TagDetail} />
        <Route exact path="/statistics" component={Statistics} />
        {/* 重定向 */}
        <Redirect exact from="/" to="/bill"></Redirect>
        {/* 404 */}
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}














export default App;









