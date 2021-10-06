// Container 는 render 외의 로직, state, 데이터, api 호출 등을 담당.
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        popular: null,
        upcoming: null,
        error: null,
        loading: true,
    }

    render() {
        const { nowPlaying, popular, upcoming, error, loading } = this.state;
        return <HomePresenter
            nowPlaying={nowPlaying}
            upcoming={upcoming}
            popular={popular}
            error={error}
            loading={loading} />;
    }
}