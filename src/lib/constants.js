import mappings from './mappings';

const specials = /[^\w\s]/gi;

const constants = Object.assign({}, ...Object
  .keys(mappings)
  .map(key => ({[key.toUpperCase().replace(specials, '_')]: mappings[key]})));

constants.FALLBACK = mappings.production;

export default constants;
