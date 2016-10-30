import mappings from './lib/mappings';
import constants from './lib/constants';

const normalize = ({environment, env, fallback = constants.FALLBACK} = {}) => {
  const envInput = (environment || env || '').toLowerCase().trim();

  return mappings[envInput] || fallback;
};

export {normalize, constants};
