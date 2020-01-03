import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super();
        //this.age = props.age;
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        }
        setTimeout(() => {
            this.setState({
                status: 1
            })
        }, 4000)
        console.log('constructor')
    }

    componentWillMount() {
        console.log('component will mount')
    }

    componentDidMount() {
        console.log('component did mount')
    }
    componentWillReceiveProps(nextProps) {
        console.log('component will receive props', nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('should component update', nextProps, nextState)
        return true
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('component will update', nextProps, nextState)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('component did update', prevProps, prevState)
    }
    componentWillUnmount() {
        console.log('component will unmount')
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        })

    }

    render() {
        return (
            <div>
                <p>In a new Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr />
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr />
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <hr />
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} />
                <br />
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string

};