import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/images/suhas-more.jpg';
import config from '../../config';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Experience', href: 'experience' },
        { content: 'Education', href: 'education' },
        { content: 'Skills', href: 'skills' },
        { content: 'Interests', href: 'interests' },
        { content: 'Awards', href: 'awards' },
      ],
      toggle: false
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt="Suhas More profile picture"
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => this.setState(({ toggle }) => ({
            toggle: !toggle
          }))}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={!this.state.toggle ? "collapse navbar-collapse" : "navbar-collapse"} id="navbarSupportedContent">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
            <li className="nav-item" key="https://blog.suhas010.com">
              <a className="nav-link" href="https://blog.suhas010.com" target="_blank" rel="noopener noreferrer">
                Blog
              </a>            
            </li>
            <li className="nav-item" key="https://drive.google.com/drive/folders/1GjXAjds3SA8-WsYMkT3wDWCJp01RALfM">
              <a className="nav-link" href="https://drive.google.com/drive/folders/1GjXAjds3SA8-WsYMkT3wDWCJp01RALfM" target="_blank" rel="noopener noreferrer">
              Certificates
              </a>
            </li>
          </Scrollspy>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
