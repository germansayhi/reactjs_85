// // Step Check Email
// // Check Email
// // CreateNewAccount

// // Khai báo callAPICheckEmail
// function callAPICheckEmail() {
//     let promiseCheckEmail = new Promise(function (resolve, reject) {
//         console.log("---Step1:  Check Email---");
//         let data = true; // Email đã tồn tại
//         if (data) {
//             reject("This is Email Exists!!");
//         } else {
//             resolve("Check Email OK!!");
//         }
//     });
//     return promiseCheckEmail;
// }

// // Khai báo callAPICheckUsername
// function callAPICheckUsername() {
//     let promiseCheckUsername = new Promise(function (resolve, reject) {
//         console.log("---Step2:  Check Username---");

//         let data = true; // Email đã tồn tại
//         if (data) {
//             reject("This is Username Exists!!");
//         } else {
//             resolve("Check Username OK!!");
//         }
//     });
//     return promiseCheckUsername;
// }

// // Khai báo callAPICreateNewAccount
// function callAPICreateNewAccount() {
//     let promiseCreateNewAccount = new Promise(function (resolve, reject) {
//         console.log("---Step3:  CreateNewAccount---");

//         let status = true; // Email đã tồn tại
//         if (status) {
//             resolve("Create New Account Successfully!");
//         } else {
//             reject("An error has occurred!!");
//         }
//     });
//     return promiseCreateNewAccount;
// }

// callAPICheckEmail()
//     .then(function (msg_resolve) {
//         console.log(msg_resolve);
//         return callAPICheckUsername();
//     })
//     .then(function (msg_resolve) {
//         return callAPICreateNewAccount();
//     })
//     .then(function (msg_resolve) {
//         console.log(msg_resolve);
//     })
//     .catch(function (msg) {
//         console.log(msg);
//     });


