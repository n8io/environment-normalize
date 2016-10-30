import test from 'ava';
import {constants} from '../src';
import mappings from './lib/mappings';

const specials = /[^\w\s]/gi;

test('should have a "FALLBACK" property', t => t.true(typeof constants.FALLBACK !== 'undefined'));

Object
  .keys(mappings)
  .forEach(key => {
    test(`should have a "${key.toUpperCase().replace(specials, '_')}" property`, t =>
      t.true(typeof constants[key.toUpperCase().replace(specials, '_')] !== 'undefined')
    );
  });
