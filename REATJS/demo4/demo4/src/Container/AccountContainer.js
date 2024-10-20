import React, { useState, useEffect } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";

function AccountContainer(props) {
    // Khai báo 1 state để qản lí viêc ẩn hiên của modal
    let [showForm, setShowForm] = useState(false);

    // Khai báo State để quản lí danh sách Account trên hê thống
    let [listAccount, setListAccount] = useState([]);

    // khai báo hàm callback
    let onHandleCreateButton = () => {
        // console.log("Hàm onHandleClickButton");
        setShowForm(true);
    };
    let onHandleCloseForm = () => {
        setShowForm(false);
    };

    // khai báo hàm callback xử lí khi người dùng khai báo hàm Create New Account
    let onHandleCreateNewAccount = (account_New) => {
        // console.log("Account created", account_New);
        listAccount.push(account_New);
        setListAccount(listAccount);
        localStorage.setItem("listAccount", JSON.stringify(listAccount));
        setShowForm(false);
    };
    // Thưc hiên khai báo hàm useEffect, đoan code trong useEffect này đươc gọi khi component
    useEffect(() => {
        if (localStorage && localStorage.getItem("listAccount")) {
            let listAccount = JSON.parse(localStorage.getItem("listAccount"));
            setListAccount(listAccount);
        }
    }, []);
    return (
        <div>
            <CreateButton onHandleCreateButton={onHandleCreateButton} />
            <ModalCreateNewAccount
                showForm={showForm}
                onHandleCloseForm={onHandleCloseForm}
                // truyền hàm callback vào ModalCreateNewAccount để xử lí khi người dùng khai báo hàm Create New Account
                onHandleCreateNewAccount={onHandleCreateNewAccount}
            />
            <ResultForm listAccount={listAccount} />
        </div>
    );
}

export default AccountContainer;
