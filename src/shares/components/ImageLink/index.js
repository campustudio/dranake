import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const ImageLink = class extends Component {
  render() {
    const {
      linkPath = '',
      src = '',
      width = 50,
      height = 50,
      outerStyle = {},
      title = '',
      subTitle = '',
    } = this.props;

    return (
      <Link to={linkPath} style={Object.assign({ 'line-height': height }, outerStyle)}>
        <img src={src} alt="imageLink" width={width} height={height} />
        {
          title
            && (
              <span style={{ paddingLeft: 5 }}>{title}</span>
            )
        }
        {
          subTitle
            && (
              <span style={{ paddingLeft: 5 }}>{subTitle}</span>
            )
        }
      </Link>
    );
  }
};

export default ImageLink;
