

module.exports = {
  // eslint-disable-next-line no-undef
  plugins: [new webpack.DefinePlugin({ IMAGES_DIR: JSON.stringify('./src/assets/images') })]
}