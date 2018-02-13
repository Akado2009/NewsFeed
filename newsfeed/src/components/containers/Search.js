import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Search extends React.Component {
    constructor () {

        super()
        this.state = {
            feed: {
                name: '',
                url: ''
            }
        }
    }

    updateFeed (field, event) {
        let feed = Object.assign({}, this.state.feed)
        feed[field] = event.target.value

        this.setState({
            feed: feed
        })
    }
    
    addFeed (event) {
        event.preventDefault()

        this.props.addFeed(this.state.feed)
        .then(data => {
            this.setState({
                feed: {
                    name: '',
                    url: ''
                }
            })
        })
        .catch(err => {
            alert('Error: ' + err.message)
        })
    }   

    render () {
        return (
            <section id="search" className="alt">
                <form method="post" action="#">
                    <input onChange={this.updateFeed.bind(this, 'name')} type="text" name="query" id="query" placeholder="Feed Name" /><br />
                    <input onChange={this.updateFeed.bind(this, 'url')} type="text" name="query" id="query" placeholder="Feed URL" /><br />
                    <button onClick={this.addFeed.bind(this)}>Add Feed</button>
                </form>
            </section>
        )
    }
}

const stateToProps = (state) => {
    return {
        feed: state.feed //referencing store property feed
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
        addFeed: (params) => dispatch(actions.addFeed(params))
    }
}

export default connect(stateToProps, dispatchToProps)(Search)