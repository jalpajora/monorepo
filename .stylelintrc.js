module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    // disabled because of prettier
    'number-leading-zero': null,
    'declaration-empty-line-before': null,
    'order/properties-alphabetical-order': null,
    'value-keyword-case': null,
    indentation: [
      2,
      {
        except: ['block'],
        message: 'Please use 2 spaces for indentation.',
        severity: 'warning',
      },
    ],
  },
};
