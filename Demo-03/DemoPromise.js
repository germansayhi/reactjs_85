let promiseCallAPI = new Promise(function (resolve, reject) {
    //Call API
    // Ajax
    // Code
    resolve("Call API Success !!!");
    // reject("Call API Failure !!!");
});
promiseCallAPI.then(function (msg_resolve) {
    console.log("Xử lí trả về Resolove");
    console.log(msg_resolve);
}).catch(function (msg_reject) {
    console.error("Xử lí trả về Reject");
    console.error(msg_reject);
});
