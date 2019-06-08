import React, { Component } from 'react';
import { Spin, Skeleton } from 'antd';
import { WingBlank } from 'antd-mobile';

export const SpinSkeletonContainer = class extends Component {
  render() {
    const {
      dataSrc,
      children,
      rows,
      title = false,
      height,
      withBlank = true,
    } = this.props;

    return (
      <div style={{ height }}>
        {
          withBlank
            ? (
              <WingBlank size="lg">
                <Spin spinning={!dataSrc}>
                  {
                    dataSrc
                      ? (
                        children
                      ) : (
                        <Skeleton active paragraph={{ rows }} title={title} />
                      )
                  }
                </Spin>
              </WingBlank>
            ) : (
              <Spin spinning={!dataSrc}>
                {
                  dataSrc
                    ? (
                      children
                    ) : (
                      <Skeleton active paragraph={{ rows }} title={title} />
                    )
                }
              </Spin>
            )
        }
      </div>
    );
  }
};

export default SpinSkeletonContainer;
