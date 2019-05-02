const verifier = require('../index').Verifier;
const assert = require('chai').assert; 

/* jshint ignore:start */
describe('Service', () => {
    describe('isAcademic', () => {
        it('assert email is academic', async () => {
            const result = await verifier.isAcademic('benny@stanford.edu');
            
            assert.isTrue(result);
        });

        it('assert email is not academic', async () => {
            const result = await verifier.isAcademic('benny@america.edu');
            
            assert.isFalse(result);
        });

        it('assert email not formated correctly', () => {
            return verifier.isAcademic('america.edu')
                            .then(() => { throw new Error('was not supposed to succeed'); })
                            .catch((error) => { assert.equal(error, 'Error: Email address is not properly formated'); });
        });
    });

    describe('getInstitutionName', () => {
        it('assert email is academic', async () => {
            const result = await verifier.getInstitutionName('benny@stanford.edu');
            
            assert.equal(result, 'Stanford University\n'); 
        });

        it('assert email is not academic', async () => {
            const result = await verifier.getInstitutionName('benny@america.edu');
            
            assert.equal(result, '');
        });

        it('assert email not formated correctly', async () => {
            return verifier.getInstitutionName('america.edu')
                            .then(() => { throw new Error('was not supposed to succeed'); })
                            .catch((error) => { assert.equal(error, 'Error: Email address is not properly formated'); });
        });
    });
});
/* jshint ignore:end */