const verifier = require('academic-email-verifier');

// check if email address is a valid academic email address
verifier.isAcademic('benny@stanford.edu')
        .then(result => console.log(result))
        .catch(error => console.log(error));

// get full institution name
verifier.getInstitutionName('benny@stanford.edu')
        .then(result => console.log(result))
        .catch(error => console.log(error));