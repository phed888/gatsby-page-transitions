import React, { Component } from 'react'
import styled from 'styled-components'

const animDur = '.3s'

const ExpandingContainer = styled.div`
    border: 1px solid #cccccc;
    margin-top: 8px;
    position: relative;
    display: inline-block;
    .expanding-header, .expanding-content {
        padding: 1.6rem;
    }
    .expanding-header {
        background-color: #ffffff;
    }
    .expanding-content-container {
        overflow: hidden;
        max-height: 0;
        transform-origin: top;
        transition: all ${animDur} ease-in-out;
        &.is-expanded {
            border-top: 1px solid #eeeeee;
            transform: scaleY(1);
            max-height: 200px;
        }
    }
    .expanding-content {
        transform: translateY(-100%);
        transition: transform ${animDur} ease-in-out;
        &.is-expanded {
            transform: translateY(0);
        }
    }
`

export default class ExpandingTopic extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expanded: false,
        }
    }

    expandContent = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
          })); 
    }
    render(props) {
        return (
            <ExpandingContainer headline={this.props.headline} content={this.props.content}>
                <div className="expanding-header" onClick={this.expandContent}>
                    { this.props.headline }
                </div>
                <div className={`expanding-content-container ${this.state.expanded ? 'is-expanded' : ''}`}>
                    <div className={`expanding-content ${this.state.expanded ? 'is-expanded' : ''} `}>
                        { this.props.content }
                    </div>
                </div>
            </ExpandingContainer>
        )
    }
}
