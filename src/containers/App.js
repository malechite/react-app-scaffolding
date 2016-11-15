import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Row from '../components/Row';
import * as actions from '../actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items } = this.props;
        let list = items.map(function(item, index) {
            return (<Row item={item} key={index} />);
        }.bind(this));

        return (
            <div id='main-container'>
                <Header />
                {list}
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    items: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
