const fs = require('fs');
const path = require('path');
const blacklist = require('./database/domains-blacklist');
const tld = require('./database/academic-tlds');

/**
 * Exposes academic email verifier API
 * @author Benny Megidish
 */
class Verifier {
    static get domainsBasePath() { 
        return path.resolve(__dirname, './domains'); 
    }

    /**
     * check's if the email address is valid (in an proper email format - RFC 2822)
     * @param {string} emailAddress email address to be checked
     * @returns {boolean} true, if the email address is valid, false, otherwise
     */
    static isValidEmailAddress(emailAddress) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        return re.test(String(emailAddress).toLowerCase());
    }

    /**
     * converts tld to url format
     * @param {string} emailAddress email address to be converted
     * @returns {string} tld as url
     */
    static domainToUrl(domain) {
        let domainUrl = domain.split('.');

        domainUrl[0] = domainUrl[0] + '.txt';
        domainUrl = domainUrl.reverse().join('/');

        return domainUrl;
    }

    /**
     * check's if the email address is academic
     * @param {string} emailAddress email address to be checked
     * @returns {Promise<boolean>} true, if the email address is academic, false, otherwise
     */
    static isAcademic(emailAddress) {
        return new Promise((resolve, reject) => {
            if (!this.isValidEmailAddress(emailAddress)) {
                reject(Error("Email address is not properly formated"));
            } else {
                let domain = emailAddress.split("@").reverse()[0];
                let domainUrl = this.domainToUrl(domain);
                let domainPath = path.join(this.domainsBasePath, domainUrl);

                // check if the domain is blacklisted
                if (blacklist.indexOf(domain) === -1) {
                    // check if the domain file exist
                    fs.access(domainPath, fs.constants.F_OK, (error) => {
                        if (error) {
                            resolve(false);
                        } else {
                            resolve(true);
                        } 
                    });
                } else {
                    resolve(false);
                }  
            }
        });   
    }    

    /**
     * query email address institution name
     * @param {string} emailAddress email address to be checked
     * @returns {Promise<string>} academic institution name, if exist, '', otherwise
     */
    static getInstitutionName(emailAddress) {
        return new Promise((resolve, reject) => {
            if (!this.isValidEmailAddress(emailAddress)) {
                reject(Error("Email address is not properly formated"));
            } else {
                let domain = emailAddress.split("@").reverse()[0];
                let domainUrl = this.domainToUrl(domain);
                let domainPath = path.join(this.domainsBasePath, domainUrl);

                // check if the domain is blacklisted
                if (blacklist.indexOf(domain) === -1) {
                    // try to read the domain institution name
                    fs.readFile(domainPath, (error, data) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data.toString('utf8'));
                        } 
                    });
                } else {
                    resolve('');
                }  
            }
        });
    }
}

module.exports = Verifier;