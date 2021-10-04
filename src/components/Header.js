import styled from "styled-components";
// styled-components 를 이용해 react component 를 생성.
// **style 이 포함된**component 를 만들 수 있게 된다.
import { Link } from "react-router-dom";
// 앱 내에 link 가 가려는 페이지가 있으면, 브라우저의 방식이 아닌 js 의 방식으로 이동하게 해준다.
// 단 <Router> 내에서 사용해야 한다.

const Header = styled.header``;

const List = styled.ul` // 백틱
    display: flex;
    &:hover {
        background-color: blue;
    }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (
    <Header>
        {/* styled component <List> 를 이용. */}
        <List>
            <Item>
                <SLink to="/">영화</SLink>
                {/* react-router <Link> 는 to 를 사용. */}
            </Item>
            <Item>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item>
                <SLink to="/search">찾아보기</SLink>
            </Item>
        </List>
    </Header>
)