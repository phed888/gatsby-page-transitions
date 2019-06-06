import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const LayoutGallery = styled.div`
    display: flex;
    align-items: stretch;
    height: 100%
    .gallery-nav {
        width: 20rem;
        padding: 1.6rem;
        background-color: #dddddd;
        height: 100%;
        list-style-type: none;
        li {
            font-size: 1.4rem;
            text-align: right;
        }
    }
`

export default function GalleryLayout({ children }) {
    return (
        <LayoutGallery>
            <ul className="gallery-nav">
                <li>Home</li>
            </ul>
            { children }
        </LayoutGallery>
    )
}
