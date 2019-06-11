import React from 'react'
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group'

const timeOut = 500

const getTransitionStyles = {
    entering: {
        position: 'absolute',
        opacity: 0,
        transform: 'translateX(-100%)',
    },
    entered: {
        transition: `all ${timeOut}ms ease-in-out`,
        opacity: 1,
        transform: 'translateX(0)',
    },
    exiting: {
        transition: `all ${timeOut}ms ease-in-out`,
        opacity: 0,
        transform: 'translateX(-100%)',
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
