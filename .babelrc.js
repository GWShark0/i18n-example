module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    [
      'react-intl-auto',
      {
        removePrefix: 'src/',
        filebase: true,
      },
    ],
  ],
};
