import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Feed extends React.Component {

    state = {
        
    }

    render () {
        const selectedFeed = this.props.feed.selected 

        let name = "Welcome to NewsFeed"
        let items = []

        if (selectedFeed) {
            name = selectedFeed.name
            items = (this.props.rss[selectedFeed.url]) ? this.props.rss[selectedFeed.url] : []
        }

        return (
            <div className="content">
                <header>
                    <h1>{name}</h1>
                    <hr />
                    <ol>
                        {items.map((item, i) => {
                            return (
                                <li key={i}><a style={style.link} target="_blank" href={item.link}>{item.title}</a></li>
                            )   
                        })}
                    </ol>
                </header>
            </div>
           
        )
    }
}

const style = {
    link: {
        border: 'none',
        padding: '10px',
        color: 'blue'
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

    }
}

export default connect(stateToProps, dispatchToProps)(Feed)