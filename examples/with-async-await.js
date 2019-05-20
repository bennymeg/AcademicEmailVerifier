const verifier = require('academic-email-verifier');

/* jshint ignore:start */

// check if email address is a valid academic email address
isAcademic = async () => {
    try {
        const result = await verifier.isAcademic('benny@stanford.edu');

        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// get full institution name
getInstitutionName = async () => {
    try {
        const result = await verifier.getInstitutionName('benny@stanford.edu');

        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

/* jshint ignore:end */

// invoke the asynchronous method
isAcademic();
getInstitutionName();