import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spiner from './Spiner'; // Corrected from Spiner to Spiner
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar';

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            progress: 0 // State to manage the progress of the loading bar
        };
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NEWS FATAKSE!!`
    }

    async componentDidMount() {
        this.updateNews();
    }

    async updateNews() {
        this.setState({ progress: 10 }); // Start the loading bar
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e6a6c868d8be46eda93c5b4cf9ff49d6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true }); // Setting loading state before fetching
        let data = await fetch(url);
        this.setState({ progress: 30 }); // Progress update
        let parseData = await data.json();
        this.setState({ progress: 70 }); // Progress update
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false // Resetting loading state after data is fetched
        });
        this.setState({ progress: 100 }); // Complete the loading bar
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e6a6c868d8be46eda93c5b4cf9ff49d6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults
        });
    };

    render() {
        return (
            <div className="container my-3">
                <LoadingBar
                    color='red'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({ progress: 0 })}
                />
                <h2 className='text-center'>NEWS FATAKSE!! - Top Headlines</h2>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spiner />} // Corrected Spiner component name
                >
                    <div className="row my-3">
                        {this.state.articles.map((element) => {
                            return (
                                <div className='col-md-4 my-3' key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title.slice(0, 20) : ""}
                                        description={element.description ? element.description.slice(0, 30) : ""}
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author || 'Unknown'}
                                        date={element.publishedAt}
                                        source={element.source.name || 'Unknown'}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}
