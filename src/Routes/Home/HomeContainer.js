// Container 는 render 외의 로직, state, 데이터, api 호출 등을 담당.
import { moviesApi } from "api";
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

    async componentDidMount() {
        try {
            const { data: { results: nowPlaying } } = await moviesApi.nowPlaying();
            const { data: { results: upComing } } = await moviesApi.upcoming();
            const { data: { results: popular } } = await moviesApi.popular();
            this.setState({
                nowPlaying, upComing, popular
            })
        } catch {
            this.setState({
                error: "문제가 발생했습니다. 영화를 가져올 수 없습니다."
            })
        } finally {
            this.setState({
                loading: false
            });
        }
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