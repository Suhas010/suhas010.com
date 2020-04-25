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
          <Helmet>
            <title>Suhas More — Personal Portfolio, ReactJS, JavaScript Developer</title>
            <meta name="description" content="Hello world, I am Suhas More ReactJS, JavaScript engineer and JS enthusiastic. Check out my portfolio and insightful blog post I wrote on ReactJS, JavaScript, and on web development in general." />
            <meta name="keywords" content="suhas more, software engineer, josh software, rectjs, javascropt, developer, engineer" />
            <meta property="og:url" content="https://www.suhas010.com" />
            <meta property="og:title" content="Suhas More — Personal Portfolio, ReactJS, JavaScript Developer" />
            <meta property="og:description" content="Hello world, I am Suhas More ReactJS, JavaScript engineer and JS enthusiastic. Check out my portfolio and insightful blog post I wrote on ReactJS, JavaScript, and on web development in general." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://suhas010.com/static/suhas-more-555bf5e4e88631fab709ecba8f320b4a.jpg" />
            <meta property="og:image:width" content="1080" />
            <meta property="og:image:height" content="608" />
            <meta property="og:image:alt" content="Suhas More" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@suhas0101" />
            <meta name="twitter:title" content="Suhas More — Personal Portfolio, ReactJS, JavaScript Developer" />
            <meta name="twitter:description" content="Hello world, I am Suhas More ReactJS, JavaScript engineer and JS enthusiastic. Check out my portfolio and insightful blog post I wrote on ReactJS, JavaScript, and on web development in general." />
            <meta name="twitter:image" content="https://suhas010.com/static/suhas-more-555bf5e4e88631fab709ecba8f320b4a.jpg" />
            {/* <link rel="icon" href={} />logo */}
            <html lang="en" />
          </Helmet>
            {/* <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: data.site.siteMetadata.description },
                { name: 'keywords', content: 'site, web' },
              ]}
            >
              <html lang="en" />
              <meta name="description" content={data.site.siteMetadata.description} />
              <meta name="image" content={data.site.siteMetadata.image} />
              <meta property="og:url" content={data.site.siteMetadata.url} />
              <meta property="og:title" content={data.site.siteMetadata.title} />
              <meta property="og:description" content={data.site.siteMetadata.description} />
              <meta property="og:image" content={data.site.siteMetadata.image} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:creator" content={data.site.siteMetadata.twitterUsername} />
              <meta name="twitter:title" content={data.site.siteMetadata.title} />
              <meta name="twitter:description" content={data.site.siteMetadata.description} />
              <meta name="twitter:image" content={data.site.siteMetadata.image} />
            </Helmet> */}
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
