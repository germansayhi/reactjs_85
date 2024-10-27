import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import InputForm from "./InputForm";

function ModalCreateNewAccount(props) {
    let { onHandleCreateNewAccount } = props;
    let { showForm, onHandleCloseForm } = props;
    let { listDepartment } = props
    let { listPosition } = props
    return (
        <>
            <Modal isOpen={showForm}>
                <ModalHeader>
                    <h3>Create New Account</h3>
                </ModalHeader>
                <ModalBody>
                    <InputForm onHandleCreateNewAccount={onHandleCreateNewAccount}
                        listDepartment={listDepartment}
                        listPosition={listPosition}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={onHandleCloseForm}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ModalCreateNewAccount;
