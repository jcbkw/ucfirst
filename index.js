function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}
if (!process.argv[2]) {
   console.error("please provide an argument");
   process.exit(1);
}
console.log(ucFirst(process.argv[2]));
