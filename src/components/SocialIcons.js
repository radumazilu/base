import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-solid-svg-icons';

class SocialIconsComponent extends Component {
  render() {
    return (
      <div className="social-icons-wrapper">
        <a href='https://github.com/radumazilu'>
          <i className="fab fa-github fa-2x social-icon"></i>
        </a>
        <a href='https://www.linkedin.com/in/radu-mazilu/'>
          <i className="fab fa-linkedin-in fa-2x social-icon m-left"></i>
        </a>
        <a href='https://medium.com/@radu_mazilu'>
          <i className="fab fa-medium-m fa-2x social-icon m-left"></i>
        </a>
        <a href='mailto:maziluradugabriel@gmail.com'>
          <i className="fas fa-envelope fa-2x social-icon m-left"></i>
        </a>
      </div>
    );
  }
}

export default SocialIconsComponent;
