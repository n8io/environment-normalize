import test from 'ava';
import {normalize} from '../src';
import mappings from './lib/mappings';

const FALLBACK_ENV = 'production';

test('should handle empty string gracefully', t => {
  const env = '';
  const expected = FALLBACK_ENV;

  t.is(expected, normalize({env}));
});

test('should handle null gracefully', t => {
  const env = null;
  const expected = FALLBACK_ENV;

  t.is(expected, normalize({env}));
});

test('should handle undefined gracefully', t => {
  const env = undefined; // eslint-disable-line no-undefined
  const expected = FALLBACK_ENV;

  t.is(expected, normalize({env}));
});

test('should handle no input gracefully', t => {
  const expected = FALLBACK_ENV;

  t.is(expected, normalize());
});

test('should handle string input gracefully', t => {
  const env = '';
  const expected = FALLBACK_ENV;

  t.is(expected, normalize(env));
});

test('should handle number input gracefully', t => {
  const env = 42;
  const expected = FALLBACK_ENV;

  t.is(expected, normalize(env));
});

test('should handle bool input gracefully', t => {
  const env = false;
  const expected = FALLBACK_ENV;

  t.is(expected, normalize(env));
});

test('should support the "environment" param', t => {
  const environment = 'whatever';
  const expected = FALLBACK_ENV;

  t.is(expected, normalize({environment}));
});

test('should be case insensitive', t => {
  const env = 'LOCAL';
  const expected = env.toLowerCase();

  t.is(expected, normalize({env}));
});

test('should fallback to default fallback when given an unmapped environment', t => {
  const env = '< invalid env string >';
  const expected = FALLBACK_ENV;

  t.is(expected, normalize({env}));
});

test('should fallback to custom fallback when given an unmapped environment and custom fallback', t => {
  const env = '< invalid env string >';
  const fallback = 'a-fallback-env';
  const expected = FALLBACK_ENV;

  t.is(fallback, normalize({
    environment: env,
    fallback: fallback
  }));
});

Object
  .keys(mappings)
  .forEach(key => {
    test(`should normalize "${key}" to "${mappings[key]}"`, t => {
      const env = {environment: key};
      const expected = mappings[key];

      t.is(expected, normalize(env));
    });
  });
