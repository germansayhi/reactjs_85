import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import InputForm from './InputForm';

function ModalCreateNewAccount(props) {
    return (
        <>
            <Modal isOpen={true} >
                <ModalHeader >
                    <h3>Create New Account</h3>
                </ModalHeader>
                <ModalBody>
                    <InputForm />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger">
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ModalCreateNewAccount;