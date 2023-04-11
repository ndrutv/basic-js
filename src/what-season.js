const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if ( !date ) return 'Unable to determine the time of year!';
    if ( isNaN(Date.parse(date)) ) throw new Error("Invalid date!");
    if ( date.hasOwnProperty('toString') ) throw new Error("Invalid date!");
    if ( date.hasOwnProperty('getMonth') ) throw new Error("Invalid date!");

    const winter = ['December', 'January', 'February'];
    const spring = ['March', 'April', 'May'];
    const summer = ['June', 'July', 'August'];
    const autumn = ['September', 'October', 'November'];

    const newDate = new Date(date);
    const month = newDate.toLocaleString('en', { month: 'long' });

    if ( winter.includes(month) ) return 'winter';
    if ( spring.includes(month) ) return 'spring';
    if ( summer.includes(month) ) return 'summer';
    if ( autumn.includes(month) ) return 'autumn';
}

module.exports = {
  getSeason
};
