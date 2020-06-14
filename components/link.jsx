import { Button, Link as MuiLink } from '@material-ui/core'
import NextLink from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

const NextComposed = React.forwardRef(function NextCompose({ as, href, ...props }, ref) {
    return (
        <NextLink href={href} as={as}>
            <a ref={ref} {...props} />
        </NextLink>
    )
})

NextComposed.propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

const Link = ({ to, innerRef, ...props }) => {
    return <MuiLink ref={innerRef} href={to} {...props} component={NextComposed} />
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    innerRef: PropTypes.object,
    children: PropTypes.node.isRequired,
}

const ButtonLink = ({ to, innerRef, ...props }) => {
    return <Button ref={innerRef} href={to} {...props} component={NextComposed} />
}

ButtonLink.propTypes = {
    to: PropTypes.string,
    innerRef: PropTypes.object,
    children: PropTypes.node.isRequired,
}

export { Link, ButtonLink }
