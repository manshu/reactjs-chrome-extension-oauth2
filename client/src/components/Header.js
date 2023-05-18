import { connect } from "react-redux"
import {Link} from 'react-router-dom'
import React, { Component } from 'react'

class Header extends Component {

    renderContent() {
        console.log(this.props.auth);
        switch (this.props.auth) {
            case null:
                return
            case false:
                return (
                    <li><a href="/auth/google">Login with Google</a></li>
                )
            default:
                return [
                    <li key={1}><a href="/auth/logout">Logout</a></li>
                ]
        }

    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Logo</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth }
}

export default connect(mapStateToProps)(Header)