module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', {loose: false}],
    ['@babel/plugin-transform-private-methods', {loose: false}],
    ['@babel/plugin-transform-private-property-in-object', {loose: false}],
  ],
  assumptions: {
    setPublicClassFields: false, // matches with the loose mode setting
  },
};
