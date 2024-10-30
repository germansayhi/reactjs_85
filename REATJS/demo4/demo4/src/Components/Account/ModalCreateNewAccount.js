import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import InputForm from "./InputForm";
import { useSelector } from "react-redux";

function ModalCreateNewAccount(props) {
    let { onHandleCreateNewAccount } = props;
    let { onHandleCloseForm } = props;

    let handleCloseForm = () => {
        onHandleCloseForm();
    };
    let stateRedux = useSelector((state) => state);
    let showForm = stateRedux.formReducer.showForm;


    return (
        <>
            <Modal isOpen={showForm}>
                <ModalHeader>
                    <h3>Create New Account</h3>
                </ModalHeader>
                <ModalBody>
                    <InputForm onHandleCreateNewAccount={onHandleCreateNewAccount}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={handleCloseForm}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ModalCreateNewAccount;
