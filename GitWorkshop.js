// This is sample file for git workshop

let object1 = {
  firstName: "Prathamesh",
  lastName: "Gaikwad",
  loginCount: 32,
  linkedAccounts: {
    Google: true,
    Facebook: false,
  },
  isLogedInFromGoogle: true,
};

let object2 = {
  position: "Trainee",
  onProbation: true,
};

console.log(object1.firstName);
console.log(object1);

object1.loginCount = 50;
console.table(object2);
