module.exports = {
  extends: ["standard"],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  globals: {
    wx: true,
    my: true,
    swan: true,
    tt: true,
    getApp: true,
    __wxRoute: true,
    getCurrentPages: true,
    requirePlugin: true
  },
  rules: {
    "no-unused-expressions": 0,
    "no-useless-constructor": 0
  },
  settings: {},
  parser: "babel-eslint"
};
