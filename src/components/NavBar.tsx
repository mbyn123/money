import { Link } from "react-router-dom"
import styled from "styled-components"
require('svg/money.svg')
require('svg/detail.svg')
require('svg/chart.svg')
export const NavBar = () => {
    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/tags">
                        <svg className="iocn"><use xlinkHref="#detail"></use> </svg>
                        <div>标签</div>
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <svg className="iocn"><use xlinkHref="#money"></use> </svg>
                        <div>记账</div>
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <svg className="iocn"><use xlinkHref="#chart"></use> </svg>
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