export const getChunkNumber = number => {
  const numRound = Math.round(number*1000000) / 1000000;
  const strRound = '' + numRound;
  const result = strRound.split('.');

  return result;
};