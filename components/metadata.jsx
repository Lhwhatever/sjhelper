import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'

export default function Metadata({ pageTitle }) {
    return (
        <Head>
            <title>{pageTitle || 'Shengji Helper'}</title>
            <link rel="icon" type="image/png" href="/favicon.png" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
    )
}

Metadata.propTypes = {
    pageTitle: PropTypes.string,
}
