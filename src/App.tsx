import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from "components/Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags">
          <Tags></Tags>
        </Route>
        <Route exact path="/money">
          <Money></Money>
        </Route>
        <Route exact path="/statistics">
          <Statistics></Statistics>
        </Route>
        <Redirect exact from="/" to="/money"></Redirect>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
      
    </Router>
  );
}





function Tags() {
  return (
    <Layout>tags</Layout>
  )
}

function Money() {
  return (
    <Layout>money</Layout>
  )
}

function Statistics() {
  return (
    <Layout>statistics</Layout>
  )
}

function NoMatch() {
  return <div>页面不存在</div>
}



export default App;









