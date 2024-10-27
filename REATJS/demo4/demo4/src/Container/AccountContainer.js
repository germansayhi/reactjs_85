import React, { useState, useEffect } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";
import { addNewAccountApi, getListAccountApi } from "../API/AccountApi";
import { getListPositionApi } from "../API/PositionApi";
import { getListDepartmentApi } from "../API/DepartmentApi";

function AccountContainer(props) {
    // Khai báo 1 state để qản lí viêc ẩn hiên của modal
    let [showForm, setShowForm] = useState(false);

    // Khai báo State để quản lí danh sách Account trên hê thống
    let [listAccount, setListAccount] = useState([]);
    let [listDepartment, setListDepartment] = useState([]);
    let [listPosition, setListPosition] = useState([]);

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
        addNewAccountApi(account_New).then((res) => {
            fetchAccounts();
        })
        setShowForm(false);
    };
    let fetchListPosition = () => {
        getListPositionApi().then((response) => {
            setListPosition(response);
        });
    };

    let fetchDepartments = () => {
        getListDepartmentApi().then((response) => {
            setListDepartment(response);
        });
    };
    let fetchAccounts = () => {
        getListAccountApi().then((response) => {
            setListAccount(response);
        });
    };
    useEffect(() => {
        // Load dữ liệu từ db
        fetchAccounts();
        fetchDepartments();
        fetchListPosition();
    }, []);
    return (
        <div>
            <CreateButton onHandleCreateButton={onHandleCreateButton} />
            <ModalCreateNewAccount
                showForm={showForm}
                onHandleCloseForm={onHandleCloseForm}
                // truyền hàm callback vào ModalCreateNewAccount để xử lí khi người dùng khai báo hàm Create New Account
                onHandleCreateNewAccount={onHandleCreateNewAccount}
                listDepartment={listDepartment}
                listPosition={listPosition}
            />
            <ResultForm listAccount={listAccount} />
        </div>
    );
}

export default AccountContainer;
