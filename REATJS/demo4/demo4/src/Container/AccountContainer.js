import React, { useEffect } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";
import { useDispatch, useSelector } from "react-redux";
import {
    actionCloseInputForm,
    actionShowInputForm,
} from "../Redux/Action/FormAction";
import {
    actionFetchListAccountAPI,
    actionAddAccountAPI,
    actionDeleteAccountAPI,
    actionUpdateAccountAPI
} from "../Redux/Action/AccountAction";
import { actionFetchListDepartmentAPI } from "../Redux/Action/DepartmentAction";
import { actionFetchListPositionAPI } from "../Redux/Action/PositionAction";
import ModalUpdateAccount from "../Components/UpdateAccount/ModalUpdateAccount";
import { actionFetchAccountUpdateInfoRedux, actionTogleFormRedux } from "../Redux/Action/FormUpdateAction";

function AccountContainer(props) {
    let dispatchRedux = useDispatch();

    let stateRedux = useSelector((state) => state)

    // khai báo hàm callback
    let onHandleCreateButton = () => {
        dispatchRedux(actionShowInputForm());
    };
    let onHandleCloseForm = () => {
        dispatchRedux(actionCloseInputForm()); //
    };

    // khai báo hàm callback xử lí khi người dùng khai báo hàm Create New Account
    let onHandleCreateNewAccount = (account_New) => {
        dispatchRedux(actionAddAccountAPI(account_New));
        dispatchRedux(actionCloseInputForm());
    };

    // Khai báo hàm callback xử lí nút DeleteAccount
    let onHandleDelete = (id) => {
        dispatchRedux(actionDeleteAccountAPI(id));
    };

    // Khai báo xử lí nút UpdateAccount
    let onHandleUpdate = async (accountUpdateForm) => {
        // Lấy của Account Cần update từ Redux
        let id_Update = stateRedux.FormUpdate.accountUpdateInfo.id;
        let accountUpdate_API = {
            id: id_Update,
            account_Update: accountUpdateForm,
        };
        // Gọi API để Update Account
        await dispatchRedux(actionUpdateAccountAPI(accountUpdate_API));


        // Đóng InputForm
        await dispatchRedux(actionTogleFormRedux());


        // Gọi API để cập nhật lại ResultForm
        await dispatchRedux(actionFetchListAccountAPI());
    };


    let onHandleEdit = (accountEdit) => {
        // Lưu thông tin Account cần Update vào Redux
        dispatchRedux(actionFetchAccountUpdateInfoRedux(accountEdit));
        // Mở UpdateForm
        dispatchRedux(actionTogleFormRedux());
    };

    useEffect(() => {
        // Load dữ liệu từ db
        dispatchRedux(actionFetchListAccountAPI());
        dispatchRedux(actionFetchListDepartmentAPI());
        dispatchRedux(actionFetchListPositionAPI());
    }, []);
    return (
        <div>
            <CreateButton onHandleCreateButton={onHandleCreateButton} />
            <ModalCreateNewAccount
                onHandleCloseForm={onHandleCloseForm}
                // truyền hàm callback vào ModalCreateNewAccount để xử lí khi người dùng khai báo hàm Create New Account
                onHandleCreateNewAccount={onHandleCreateNewAccount}
            />
            <ResultForm
                onHandleDelete={onHandleDelete}
                onHandleEdit={onHandleEdit}
            />
            <ModalUpdateAccount onHandleUpdate={onHandleUpdate} />
        </div>
    );
}

export default AccountContainer;
