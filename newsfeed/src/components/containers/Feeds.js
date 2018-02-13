import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Feeds extends React.Component {

    constructor () {

        super()
        this.state = {
            
        }
    }

    componentDidMount () {

        this.props.fetchFeeds(null)
        .then(data => {
            this.setState({
                feeds: data
            })
        })
        .catch(err => {
            alert('Error: ' + err.message)
        })
    }

    selectFeed (feed, event) {
        event.preventDefault()
        this.props.selectFeed(feed)
        //convert xml to json
        const items = this.props.rss[feed.url]
        if (items != null) {
            console.log('already')
            return 
        }

        const endpoint = 'https://api.rss2json.com/v1/api.json'
        const params = {
            rss_url: feed.url
        }
        this.props.fetchRssFeed(endpoint, params)
        .then(data => {
            console.log('trash')
            console.log('RSS FEED: ' + JSON.stringify(data))
        })
        .error(err => {
            alert('Error: ' + err.message)
        })
    }

    render () {

        const feeds = this.props.feed.all || []
        
        return (
            <ul>
            { feeds.map((feed, i) =>{
                const color = (feed == this.props.feed.selected) ? 'red' : '#333'
                return <li key={feed.id}><a style={{color : color}} href="#" onClick={this.selectFeed.bind(this, feed)}>{feed.name}</a></li>
                })
            }
            </ul>
        )
    }
}

const stateToProps = (state) => {
    return {
        feed: state.feed, //referencing store property feed
        rss: state.rss
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
        addFeed: (params) => dispatch(actions.addFeed(params)),
        selectFeed: (feed) => dispatch(actions.selectFeed(feed)),
        fetchRssFeed: (url, params) => dispatch(actions.fetchRssFeed(url, params))
    }
}

export default connect(stateToProps, dispatchToProps)(Feeds)