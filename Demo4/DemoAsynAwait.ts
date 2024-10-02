async function callAPICheckEmail() {
    console.log("---Step1:  Check Email---");
    let data = true; // Email đã tồn tại
    return data;
}

async function callAPICheckUsername() {
    console.log("---Step2:  Check Username---");
    let data = false; // Username chưa tồn tại
    return data;
}

async function callAPICreateAccount() {
    console.log("---Step3:  Create Account---");
    let status = true; // Tạo tài khoản thành công
    return status;
}

async function createNewAccount() {
    let resutCheckEmail = await callAPICheckEmail();
    if (!resutCheckEmail) {
        return;
    }
    let resutCheckUsername = await callAPICheckUsername();
    if (!resutCheckUsername) {
        return;
    }
    let resultCreateAccount = await callAPICreateAccount();
    if (!resultCreateAccount) {
        return;
    }
}

