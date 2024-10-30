import React, { useEffect } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";
import { useDispatch } from "react-redux";
import { actionCloseInputForm, actionShowInputForm } from "../Redux/Action/FormAction";
import { actionFetchListAccountAPI, actionAddAccountAPI } from "../Redux/Action/AccountAction";
import { actionFetchListDepartmentAPI } from "../Redux/Action/DepartmentAction";
import { actionFetchListPositionAPI } from "../Redux/Action/PositionAction";

function AccountContainer(props) {

    let dispatchRedux = useDispatch();

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
    }
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
            <ResultForm />
        </div>
    );
}

export default AccountContainer;
