var ucFirst = require('../index').ucFirst;

if (!process.argv[2]) {
    console.error("please provide an argument");
    process.exit(1);
 }

 console.log(ucFirst(process.argv[2]));
 