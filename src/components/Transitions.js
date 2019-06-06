import React from 'react'
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group'

const timeOut = 500

const getTransitionStyles = {
    entering: {
        position: 'absolute',
        opacity: 0,
    },
    entered: {
        transition: `opacity ${timeOut}ms ease-in-out`,
        opacity: 1,
    },
    exiting: {
        transition: `all ${timeOut}ms ease-in-out`,
        opacity: 0,
    }

}

export default class Transitions extends React.PureComponent {
    render() {
        const { children, location } = this.props
        return (
            <TransitionGroup>
                <ReactTransition
                    key={ location.pathname }
                    timeout={{
                        enter: timeOut,
                        exit: timeOut
                    }}
                >
                    {
                        status => (
                            <div style={{ ...getTransitionStyles[status], }}>
                                { children }
                            </div>
                        )
                    }

                </ReactTransition>
            </TransitionGroup>
        )
    }
}
