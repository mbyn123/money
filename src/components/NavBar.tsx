import { Link } from "react-router-dom"
import styled from "styled-components"
import { Icon } from "./Icon"

export const NavBar = () => {
    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/tags">
                        <Icon name="detail"></Icon>
                        <div>标签</div>
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <Icon name="money"></Icon>
                        <div>记账</div>
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <Icon name="chart"></Icon>
                        <div>统计</div>
                    </Link>
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
}
}
`