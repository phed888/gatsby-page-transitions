import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import Transitions from '../components/Transitions'

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 10px;
        color: #333333;
        background-color: #eeeeee;
        height: 100%;
    }
    body {
        background-color: #ffffff;
        height: 100%;
        margin: 0 auto;
        width: 970px;
        font-size: 1.4rem;
        #___gatsby, #___gatsby > div {
        height: 100%;
        }
    }
`

const LayoutGallery = styled.div`
    /* display: flex;
    align-items: stretch; */
    height: 100%;
    padding: 1.6rem;
    position: relative;
    .gallery-nav {
        position: absolute;
        left: -200px;
        top: 0;
        width: 20rem;
        padding: 1.6rem;
        height: 100%;
        list-style-type: none;
        li {
            font-size: 1.4rem;
            text-align: right;
            margin: 0 0 .5rem;
            .gallery-nav-link {
                &:active, &:visited, &:hover, &:link {
                    text-decoration: none;
                    color: #333333;
                }
            }
        }
    }
`

export default function GalleryLayout({ children, location }) {
    return (
        <LayoutGallery>
            <GlobalStyles />
            <ul className="gallery-nav">
                <li><Link to={'/'} className="gallery-nav-link">Home</Link></li>
                <li><Link to={'/Page1'} className="gallery-nav-link">Page 1</Link></li>
            </ul>
            <Transitions location={location}>
                { children }
            </Transitions>
        </LayoutGallery>
    )
}
