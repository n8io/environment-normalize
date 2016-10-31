import aliases from './aliases';

const props = Object
  .keys(aliases)
  .map(key => {
    const obj = {[key]: key};

    aliases[key].forEach(variation => obj[variation] = key); // eslint-disable-line no-return-assign

    return obj;
  });

const mappings = Object.assign({}, ...props);

export default mappings;
