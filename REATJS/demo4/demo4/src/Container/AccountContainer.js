import React, { useState } from 'react';
import CreateButton from '../Components/Account/CreateButton';
import ResultForm from '../Components/Account/ResultForm';
import ModalCreateNewAccount from '../Components/Account/ModalCreateNewAccount';

function AccountContainer(props) {
    // Khai báo 1 state để qản lí viêc ẩn hiên của modal
    let [showForm, setShowForm] = useState(false);

    // khai báo hàm callback 
    let onHandleCreateButton = () => {
        // console.log("Hàm onHandleClickButton");
        setShowForm(true);
    };
    let onHandleCloseForm = () => {
        setShowForm(false);
    };
    return (
        <div>
            <CreateButton onHandleCreateButton={onHandleCreateButton} />
            <ModalCreateNewAccount
                showForm={showForm}
                onHandleCloseForm={onHandleCloseForm}
            />
            <ResultForm />
        </div>
    );
}

export default AccountContainer;