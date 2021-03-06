import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Button>{'Test'}</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
