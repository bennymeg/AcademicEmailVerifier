/**
 * Copyright 2019 Benny Megidish
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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