import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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

export default function GalleryLayout({ children }) {
    return (
        <LayoutGallery>
            <ul className="gallery-nav">
                <li><Link to={'/'} className="gallery-nav-link">Home</Link></li>
                <li><Link to={'/Page1'} className="gallery-nav-link">Page 1</Link></li>
            </ul>
            { children }
        </LayoutGallery>
    )
}
