const {
  override, fixBabelImports, addWebpackAlias, addLessLoader,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  fixBabelImports('antd-mobile', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  // fixBabelImports('ant-design-pro', {
  //   libraryName: 'ant-design-pro',
  //   libraryDirectory: 'lib',
  //   style: true,
  //   camel2DashComponentName: false,
  // }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#108ee9' },
  }),
  addWebpackAlias({
    '@apis': path.resolve(__dirname, 'src/apis/'),
    '@convertors': path.resolve(__dirname, 'src/convertors/'),
    '@pages': path.resolve(__dirname, 'src/pages/'),
    '@modules': path.resolve(__dirname, 'src/modules/'),
    '@screens': path.resolve(__dirname, 'src/screens/'),
    '@components': path.resolve(__dirname, 'src/shares/components/'),
    '@h5components': path.resolve(__dirname, 'src/shares/h5components/'),
    '@constants': path.resolve(__dirname, 'src/shares/constants/'),
    '@libs': path.resolve(__dirname, 'src/shares/libs/'),
    '@styles': path.resolve(__dirname, 'src/shares/styles/'),
    '@static': path.resolve(__dirname, 'src/static/'),
    '@apiService': path.resolve(__dirname, '../api-service/'),
  }),
);
