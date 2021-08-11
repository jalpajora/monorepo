'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var Link = function Link(_ref) {
  var _ref$src = _ref.src,
    src = _ref$src === void 0 ? '#' : _ref$src,
    children = _ref.children;
  return /*#__PURE__*/ React.createElement(
    'a',
    {
      href: src,
    },
    children
  );
};

var _default = Link;
exports['default'] = _default;
