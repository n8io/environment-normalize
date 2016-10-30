import aliases from './aliases';

const mappings = Object.assign({}, ...Object
  .keys(aliases)
  .map(key => {
    const obj = {[key]: key};

    aliases[key].forEach(variation => obj[variation] = key);

    return obj;
  }))
  ;

export default mappings;
