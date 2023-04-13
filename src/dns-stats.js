const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};

  for ( let domain of domains ) {
    const arr = domain.split('.');
    let res = '';

    for (let i = arr.length - 1; i >= 0; i--) {
      res += `.${arr[i]}`;

      if ( res in dnsStats ) {
        dnsStats[res]++;
      } else {
        dnsStats[res] = 1;
      }
    }
  }

  return dnsStats;
}

module.exports = {
  getDNSStats
};
