import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Icon } from "./Icon"

export const NavBar = () => {
    return (
        <Nav>
            <ul>
                <li>
                    <NavLink to="/bill" activeClassName="selected">
                        <Icon name="detail"></Icon>
                        <div>明细</div>
                    </NavLink >
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"></Icon>
                        <div>记账</div>
                    </NavLink >
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="chart"></Icon>
                        <div>图表</div>
                    </NavLink >
                </li>
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
  padding: 1rem;
  
  >a{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #585757;
      .icon{
          fill:#585757;
      }
      &.selected{
          color: #FFDA44;
        .icon{
            fill: #FFDA44
        } 
      }
  }
}
}
`