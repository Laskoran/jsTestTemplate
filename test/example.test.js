const chai = require('chai');
const { assert } = chai;

import Example from '../src/example';

describe('Example', () => {
    it('should be creatable', () => {
        const example = new Example();
        assert.isDefined(example);
    });
});
