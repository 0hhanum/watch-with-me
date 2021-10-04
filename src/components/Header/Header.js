import "./Header.css";

export default () => (
    <header className="nav">
        <ul>
            <li>
                <a href="/">영화</a>
            </li>
            <li>
                <a href="/tv">TV</a>
            </li>
            <li>
                <a href="/search">찾아보기</a>
            </li>
        </ul>
    </header>
)