const objKey = ['Name', 'Age', 'D.O.B', 'Gender', 'Marital Status', 'Hometown', 'State', 'Nationailty'];
const objValue = ['Shankar', 29, '21 July 1992', 'Male', 'Married', 'Kallakurichi', 'Tamilnadu', 'Indian'];

const arr1 = document.getElementById("arr1");
arr1.innerHTML = `<b>keys</b> = [${objKey}]`;

const arr2 = document.getElementById("arr2");
arr2.innerHTML = `<b>values</b> = [${objValue}]`;

var obj = {};
for (var i in objKey) {
    obj[objKey[i]] = objValue[i];
}

console.log(obj);

var jsonObj = JSON.stringify(obj);
var jobj = document.getElementById("jobj");
jobj.innerHTML = `<b>JSON object</b> = ${jsonObj}`;

/*JsonObj = {
    "Name":"Shankar",
    "Age":29,
    "D.O.B":"21 July 1992",
    "Gender":"Male",
    "Marital Status":"Married",
    "Hometown":"Kallakurichi",
    "State":"Tamilnadu",
    "Nationailty":"Indian"
}; */



// iterate object keys to array elements using for in loop
var newArr = [];
for (var key in obj) {
    newArr.push(key);
}
console.log(newArr);

//iterate object values to array elements using for in loop
var newArr1 = [];
for (var key in obj) {
    newArr1.push(obj[key]);
}
console.log(newArr1);

//iterate object keys to array elements using forEach loop
var newArr2 = [];
Object.keys(obj).forEach(
    function (key) {
        newArr2.push(key);
    }
);
console.log(newArr2);

//iterate object values to array elements using forEach loop.
var newArr3 = [];
Object.values(obj).forEach(
    function (key) {
        newArr3.push(key);
    }
);
console.log(newArr3);

//iterate object keys and values to array elements using forEach loop.
var newArr4 = [];
Object.entries(obj).forEach(
    function (entry) {
        newArr4.push(entry);
        //key = entry[0]; value = entry[1];
    }
);
console.log(newArr4);

// compare two JSON objects have same properties without order

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

var jobj1 = JSON.stringify(obj1);
var jobj2 = JSON.stringify(obj2);

console.log(_.isEqual(jobj1, jobj2));


const sampleUserData = [
    {
        companyId: 821,
        email: "akash.k@pillir.io",
        fullName: "Akash K",
        id: 11819,
        isActive: true,
        loginName: "akash",
        branch: "India",
        depart2: "Engineer",
        department: "Engineering",
        designation: "Developer",
        roleName: "AllAccess,Developer,Tenant Admin,End-User"
    },
    {
        companyId: 821,
        email: "shankar.m@pillir.io",
        fullName: "Shankar M",
        id: 11841,
        isActive: true,
        loginName: "shankarm",
        branch: "United States",
        depart2: "Management",
        department: "Engineering",
        designation: "Developer",
        roleName: "Tenant Admin,AllAccess"
    },
    {
        companyId: 821,
        email: "manikandan.k@pillir.io",
        fullName: "Manikandan Kumar",
        id: 11842,
        isActive: true,
        loginName: "manikandan",
        branch: "Korea",
        depart2: "Quality",
        department: "Engineering",
        designation: "Developer",
        roleName: "Tenant Admin,AllAccess",
    },
    {
        companyId: 821,
        email: "akash.k@pillir.io",
        fullName: "Akash K",
        id: 11819,
        isActive: true,
        loginName: "akash",
        branch: "India",
        depart2: "Engineer",
        department: "Engineering",
        designation: "Developer",
        roleName: "AllAccess,Developer,Tenant Admin,End-User"
    },
    {
        companyId: 821,
        email: "shankar.m@pillir.io",
        fullName: "Shankar M",
        id: 11841,
        isActive: true,
        loginName: "shankarm",
        branch: "United States",
        depart2: "Management",
        department: "Engineering",
        designation: "Developer",
        roleName: "Tenant Admin,AllAccess"
    },
    {
        companyId: 821,
        email: "manikandan.k@pillir.io",
        fullName: "Manikandan Kumar",
        id: 11842,
        isActive: true,
        loginName: "manikandan",
        branch: "Korea",
        depart2: "Quality",
        department: "Engineering",
        designation: "Developer",
        roleName: "Tenant Admin,AllAccess",
    }
];

// Filtering multiple objects values to an array based on particular key.
let tempUserBranch = [];
Object.values(sampleUserData).forEach(
    function (key) {
        tempUserBranch.push(key.branch);
    }
);
const userBranch = [...new Set(tempUserBranch)];
console.log(userBranch);

// Filtering multiple objects values to an array based on particular key.
let tempUserDepart2 = [];
Object.values(sampleUserData).forEach(
    function (key) {
        tempUserDepart2.push(key.depart2);
    }
)
const UserDepart2 = [...new Set(tempUserDepart2)];
console.log(UserDepart2);

// Filtering multiple objects values to an array based on particular key.
let tempUserDepartment = [];
Object.values(sampleUserData).forEach(
    function (key) {
        tempUserDepartment.push(key.department);
    }
)
const UserDepartment = [...new Set(tempUserDepartment)];
console.log(UserDepartment);

// Filtering multiple objects values to an array based on particular key.
let tempUserDesignation = [];
Object.values(sampleUserData).forEach(
    function (key) {
        tempUserDesignation.push(key.designation);
    }
)
const UserDesignation = [...new Set(tempUserDesignation)];
console.log(UserDesignation);

// Filtering multiple objects values to an array based on particular key.
let tempUserRole = [];
Object.values(sampleUserData).forEach(
    function (key) {
        tempUserRole.push(key.roleName);
    }
)
const UserRole = [...new Set(tempUserRole)];
console.log(UserRole);
