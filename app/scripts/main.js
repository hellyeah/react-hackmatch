import React from 'react';

var Startups = [
    'http://rjvir.com',
    'http://hellyeah.github.io'
]

var App = React.createClass({
    getInitialState:function() {
        return {
            count: 0,
            txt: 'http://rjvir.com',
            red: 0,
            green: 0,
            blue: 0,
            startup: 'http://rjvir.com'
        }
    },
    incrementCount: function() {
        this.setState({
            count: this.state.count + 1,
            startup: Startups[this.state.count]
        })
    },
    render: function() {
        return (
            <div>
                {this.state.txt}
                <h1>Count: {this.state.count}</h1>
                <Next incrementCount={this.incrementCount}/>
                <InputURL update={this.update} />
                <iframe src={this.state.startup}></iframe>
            </div>
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
                <button type="button" onClick={this.props.incrementCount}>Increment</button>
            </div>
        )
    }
})

React.render(<App txt="THIS IS THE TXT PROP"  />, document.body)