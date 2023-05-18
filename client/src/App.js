import { Component } from "react";
import Header from "./components/Header"
import { connect } from "react-redux";
import * as actions from "./actions"

class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }


    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

export default connect(null, actions)(App)