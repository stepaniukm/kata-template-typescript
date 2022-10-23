import { helloWorld } from './index';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('Init test', () => {
	it('runs', () => {
		const result = helloWorld();

		assert.equal(result, 'Hello World!');
	});
});
