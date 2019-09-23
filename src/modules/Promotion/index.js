import React, { Component } from 'react';
import './index.less';

export default class Promotion extends Component {
  render() {
    const {
      closePromotion = () => {},
      visible = true,
    } = this.props;

    return (
      <div id="J_promotional-top">
        {
          visible
          && (
            <a
              href="https://www.buyer-stg.jryzt.com"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="顶部推广"
              className="promotional-top"
              clstag="h|keycount|head|adtop_04"
              style={{ backgroundColor: 'rgb(184, 210, 244)' }}
            >
              <div className="jd_container">
                <i
                  onClick={closePromotion}
                  onKeyPress={closePromotion}
                  className="iconfont JD_close-button--square"
                  ariaLabel="关闭顶部推广"
                />
              </div>
            </a>
          )
        }
      </div>
    );
  }
}
