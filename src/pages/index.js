import React from "react"
import { createGlobalStyle } from 'styled-components'
import GalleryLayout from '../components/GalleryLayout'
import PageHeader from '../components/PageHeader'

export const GlobalStyles = createGlobalStyle`
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

export default () => (
    <GalleryLayout>
        <GlobalStyles />
        <PageHeader pageTitle={'Home'} bgColor={'#ff0000'} />
        <p>Hello world!</p>
    </GalleryLayout>
)
