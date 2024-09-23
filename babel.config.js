module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@assets': './app/assets',
          '@components': './app/components',
          '@constants': './app/constants',
          '@hooks': './app/hooks',
          '@https': './app/https',
          '@navigation': './app/navigation',
          '@screens': './app/screens',
          '@services': './app/services',
          '@utils': './app/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
