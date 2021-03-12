export const isolateMemoization = selector => (...args) => selector(...args);

export default isolateMemoization;
