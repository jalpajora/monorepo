'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

var Input = function Input(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    placeholder = _ref.placeholder,
    _ref$onChange = _ref.onChange,
    onChange =
      _ref$onChange === void 0
        ? function () {
            return console.log('changed');
          }
        : _ref$onChange;
  return /*#__PURE__*/ _react['default'].createElement('input', {
    onChange: onChange,
    placeholder: placeholder,
    type: type,
    value: value,
  });
};

var _default = Input;
exports['default'] = _default;
