import React from "react"
import { Link } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import GalleryLayout from '../components/GalleryLayout'

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
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
        #___gatsby, #___gatsby > div {
        height: 100%;
        }
    }
`

export default () => (
    <GalleryLayout>
        <GlobalStyles />
        <p>Hello world!</p>
    </GalleryLayout>
)
