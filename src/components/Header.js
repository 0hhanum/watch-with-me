import styled from "styled-components";

// styled-components 를 이용해 react component 를 생성.
// **style 이 포함된**component 를 만들 수 있게 된다.

const List = styled.ul` // 백틱
    display: flex;
    &:hover {
        background-color: blue;
    }
`;

export default () => (
    <header>
        {/* styled component <List> 를 이용. */}
        <List>
            <li>
                <a href="/">영화</a>
            </li>
            <li>
                <a href="/tv">TV</a>
            </li>
            <li>
                <a href="/search">찾아보기</a>
            </li>
        </List>
    </header>
)