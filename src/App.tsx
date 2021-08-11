import styled from "styled-components";
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { NavBar } from "components/NavBar";

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags></Tags>
            </Route>
            <Route path="/money">
              <Money></Money>
            </Route>
            <Route path="/statistics">
              <Statistics></Statistics>
            </Route>
            <Redirect exact from="/" to="/money"></Redirect>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Main>
        <NavBar/>
      </Wrapper>
    </Router>
  );
}







const Wrapper = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;

`

const Main = styled.div`
flex:1;
overflow: auto;
`



function Tags() {
  return (
    <div>tags</div>
  )
}

function Money() {
  return (
    <div>money</div>
  )
}

function Statistics() {
  return (
    <div>statistics</div>
  )
}

function NoMatch() {
  return <div>页面不存在</div>
}



export default App;









