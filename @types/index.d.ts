/**
 * @author Benny Megidish
 */

export declare class Verifier {
    /**
     * check's if the email address is valid (in an proper email format - RFC 2822)
     * @param {string} emailAddress email address to be checked
     * @returns {boolean} true, if the email address is valid, false, otherwise
     */
    static isValidEmailAddress(emailAddress: string): boolean

    /**
     * check's if the email address is academic
     * @param {string} emailAddress email address to be checked
     * @returns {Promise<boolean>} true, if the email address is academic, false, otherwise
     */
    static isAcademic(emailAddress: string): Promise<boolean>

    /**
     * query email address institution name
     * @param {string} emailAddress email address to be checked
     * @returns {Promise<string>} academic institution name, if exist, '', otherwise
     */
    static getInstitutionName(emailAddress: string): Promise<string>
}