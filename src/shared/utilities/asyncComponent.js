import React, { Component } from 'react';
import LargeSpinner from 'shared/loading/LargeSpinner';

export default function asyncComponent(getComponent) {
    return class AsyncComponent extends Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component;
                    this.setState({ Component });
                });
            }
        }
        render() {
            const { Component } = this.state;
            if (Component) {
                return <Component {...this.props} />;
            }
            return <LargeSpinner />;
        }
    };
}
