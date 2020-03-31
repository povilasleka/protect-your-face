import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import useSiteMetadata from '../hooks/use-sitemetadata'

function SEO({ description, lang, meta, keywords, title, pathName }) {
  const data = useSiteMetadata();

  const metaDescription = description || data.description


  const canonical = pathName
  ? `${data.siteUrl}`
  : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.seotitle} `}
      link={
        canonical
        ? [
          {
            rel: "canonical",
            href: canonical
          },
        ]
        : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired
}

export default SEO


