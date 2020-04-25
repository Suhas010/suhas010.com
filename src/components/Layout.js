import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/resume.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: data.site.siteMetadata.description },
                { name: 'keywords', content: 'site, web' },
              ]}
            >
              <html lang="en" />
              <meta name="description" content={data.site.siteMetadata.description} />
              <meta name="image" content={data.site.siteMetadata.image} />
              {data.site.siteMetadata.url && <meta property="og:url" content={data.site.siteMetadata.url} />}
              {data.site.siteMetadata.title && <meta property="og:title" content={data.site.siteMetadata.title} />}
              {data.site.siteMetadata.description && (
                <meta property="og:description" content={data.site.siteMetadata.description} />
              )}
              {data.site.siteMetadata.image && <meta property="og:image" content={data.site.siteMetadata.image} />}
              <meta name="twitter:card" content="summary_large_image" />
              {data.site.siteMetadata.twitterUsername && (
                <meta name="twitter:creator" content={data.site.siteMetadata.twitterUsername} />
              )}
              {data.site.siteMetadata.title && <meta name="twitter:title" content={data.site.siteMetadata.title} />}
              {data.site.siteMetadata.description && (
                <meta name="twitter:description" content={data.site.siteMetadata.description} />
              )}
              {data.site.siteMetadata.image && <meta name="twitter:image" content={data.site.siteMetadata.image} />}
            </Helmet>
            <div className={'main-body'}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
