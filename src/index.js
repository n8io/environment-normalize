import mappings from './lib/mappings';
import constants from './lib/constants';

const normalize = (options = {}, ...params) => {
  const {environment, env, fallback = constants.FALLBACK} = options;
  const isShorthand = typeof options === 'string';
  const tEnv = (isShorthand ? options : (environment || env || '')).toLowerCase().trim();
  const tFallback = (isShorthand ? (params && params[0]) || constants.FALLBACK : fallback);

  return mappings[tEnv] || tFallback;
};

export {normalize, constants};
