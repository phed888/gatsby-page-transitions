import React from 'react';
import GalleryLayout from '../components/GalleryLayout';
import { GlobalStyles } from './index';
import PageHeader from '../components/PageHeader'

export default function Page1() {
    return (
        <GalleryLayout>
            <GlobalStyles />
            <PageHeader pageTitle={'Page 1'} bgColor={'#0000ff'} />
            This is page 1
        </GalleryLayout>
    )
}
