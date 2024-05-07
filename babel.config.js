// api.cache(true)

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@common': './src/components/common/index',
          '@containers': './src/components/containers/index',
          '@themes': './src/themes/index',
          '@store': './src/store/index',
          '@services': './src/services/index',
          '@navigation': './src/navigation/index',
          '@hooks': './src/hooks/index',
          '@constants': './src/constants/index',
          '@utils': './src/utils/index',
        },
      },
    ],
  ],
};
