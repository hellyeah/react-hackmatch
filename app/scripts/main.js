import React from 'react';

var App = React.createClass({
    getDefaultProps: function() {
        return {
            startups: [
                'http://rjvir.com',
                'http://hellyeah.github.io',
                'http://lob.com',
                'http://zerocater.com'
            ]
            //should load this dynamically from Parse
            //should also run something that watches to make sure iframes work
        }
    },
    propTypes: {
        startups: React.PropTypes.array
    },
    getInitialState: function() {
        return {
            count: 0,
        }
    },
    incrementCount: function() {
        this.setState({
            count: this.state.count + 1,
            //startup: startups[this.state.count]
        })
    },
    render: function() {
        var divStyle = {
            overflow: 'hidden',
            height: '100%'
        }
        return (
            <div style={divStyle}>
                <div class="header">
                    {this.state.txt}
                    <h1>Count: {this.state.count}</h1>
                    <Next incrementCount={this.incrementCount}/>
                </div>
                <InputURL update={this.update} />
                <StartupFrame startup={this.props.startups[this.state.count]}></StartupFrame>
            </div>
        )
    }
})

var StartupFrame = React.createClass({
    render: function() {
        return (
            <iframe src={this.props.startup}></iframe>
        )
    }
})

var InputURL = React.createClass({
    render: function() {
    return (
        <div>
            <input type="text" onChange={this.props.update} />
        </div>
    )
    }
})

var Next = React.createClass({
    render: function() {
        return (
            <div>
                <button type="button" onClick={this.props.incrementCount}>Next</button>
            </div>
        )
    }
})

React.render(<App txt="THIS IS THE TXT PROP"  />, document.body)