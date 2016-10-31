import mappings from './mappings';

const specials = /[^\w\s]/gi;
const props = Object
  .keys(mappings)
  .map(key => ({[key.toUpperCase().replace(specials, '_')]: mappings[key]}));

const constants = Object.assign({}, ...props);

constants.FALLBACK = mappings.production;

export default constants;
