/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus, knowsProgramming, config) {
    let weeks, hours = 1300;
    if (knowsProgramming === true) {
        hours = 800;
    }
    weeks = hours / config[focus];
    return Math.ceil(weeks);
};
