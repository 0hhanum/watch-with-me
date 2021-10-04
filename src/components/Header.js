import styled from "styled-components";
// styled-components 를 이용해 react component 를 생성.
// **style 이 포함된**component 를 만들 수 있게 된다.
import { Link, withRouter } from "react-router-dom";
// 앱 내에 link 가 가려는 페이지가 있으면, 브라우저의 방식이 아닌 js 의 방식으로 이동하게 해준다.
// 단 <Router> 내에서 사용해야 한다.
// withRouter => 다른 컴포넌트를 감싸는 컴포넌트.

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul` // 백틱
    display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid ${props => props.current ? "#3498db" : "transparent"};
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const HeaderComponent = ({ location: { pathname } }) => {
    // withRouter 에서 props 를 전달받는다. 
    return (
        <Header>
            {/* styled component <List> 를 이용. */}
            <List>
                {/* current => styled-component 에서 가능한 컴포넌트에 prop 지정. */}
                <Item current={pathname === "/"}>
                    <SLink to="/">영화</SLink>
                    {/* react-router <Link> 는 to 를 사용. */}
                </Item>
                <Item current={pathname === "/tv"}>
                    <SLink to="/tv">TV</SLink>
                </Item>
                <Item current={pathname === "/search"}>
                    <SLink to="/search">찾아보기</SLink>
                </Item>
            </List>
        </Header>
    );
}

export default withRouter(HeaderComponent);
// withRouter 는 함수를 받는거임 (개념이).