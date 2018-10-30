const fs = require('fs');
const path = require('path');
const blacklist = require('./database/domains-blacklist');
const tld = require('./database/academic-tlds');

/**
 * Exposes academic email verifier API
 * @author Benny Megidish
 */

const domainsBasePath = path.resolve(__dirname, './domains');

/**
 * check's if email address is academic
 * @param {string} emailAddress email address to be checked
 * @returns {Promise<boolean>} true, if email address is academic, false, otherwise
 */
function isAcademic(emailAddress) {

}    

/**
 * query email address institution name
 * @param {string} emailAddress email address to be checked
 * @returns {Promise<string>} academic institution name, if exist, '', otherwise
 */
function getInstitutionName(emailAddress) {

}


module.exports.getInstitutionName = getInstitutionName;
module.exports.isAcademic = isAcademic;