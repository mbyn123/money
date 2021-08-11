import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavBar = ()=>{
    return (
        <Nav>
            <ul>
            <li><Link to="/tags">标签</Link></li>
            <li><Link to="/money">记账</Link></li>
            <li><Link to="/statistics">统计</Link></li>
          </ul> 
        </Nav>
    )
}

const Nav = styled.div`
>ul{
  display: flex;
  box-shadow:  0 0 .3rem rgba(0,0,0,.25);
>li{
  width: 33.333%;
  text-align: center;
  padding: 1.6rem;
}
}
`