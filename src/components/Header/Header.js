import styles from "./Header.module.css";
// 모듈화한 css 파일은 js import 와 동일하게 import.


export default () => (
    <header>
        {/* 모듈화한 css 파일은 js object 처럼 사용할 수 있다. */}
        <ul className={styles.navList}>
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