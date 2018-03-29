import react, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import store, { fetchPlaylist } from '../store';

export default class SinglePlaylist extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }
    componentDidMount() {
        store.dispatch(fetchPlaylist())
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        console.log(this.state)
    }
}