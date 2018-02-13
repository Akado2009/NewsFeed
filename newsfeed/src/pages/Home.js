import React, { Component } from 'react'
import { Feeds, Search, Feed } from '../components/containers'

class Home extends React.Component {

    render () {
        return (
		    <div id="wrapper">
		        <div id="main">
		            <div className="inner">

                        <section id="banner">
                            <Feed />
                        </section>

      				</div>
      			</div>

                <div id="sidebar">
                    <div className="inner">
                        <Search />
                        <nav id="menu">
                            <header className="major">
                                <h2>My Feeds</h2>
                            </header>
                            <Feeds />
                        </nav>	
                    </div>
                </div>
			</div>
        )
    }
}


export default Home