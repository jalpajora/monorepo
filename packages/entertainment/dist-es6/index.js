'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

var Entertainment = function Entertainment(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    null,
    /*#__PURE__*/ _react['default'].createElement('h2', null, 'This is entertainment'),
    /*#__PURE__*/ _react['default'].createElement('div', null, children)
  );
};

var _default = Entertainment;
exports['default'] = _default;
