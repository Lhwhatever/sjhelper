import Head from "next/head";
import PropTypes from 'prop-types'

export default function Metadata({ pageTitle }) {
    return (<Head>
        <title>{pageTitle || 'Shengji Helper'}</title>
    </Head>)
}

Metadata.propTypes = {
    pageTitle: PropTypes.string
}