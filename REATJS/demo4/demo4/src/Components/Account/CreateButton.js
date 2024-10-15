import React from 'react';
import { Button } from 'reactstrap';

function CreateButton(props) {
    // Dectruring
    let { onHandleCreateButton } = props;

    let handleCreateNewAccount = () => {
        onHandleCreateButton();
    };
    return (
        <>
            <Button
                color="primary"
                onClick={handleCreateNewAccount}>
                Create New Account
            </Button>
        </>
    );
}

export default CreateButton;