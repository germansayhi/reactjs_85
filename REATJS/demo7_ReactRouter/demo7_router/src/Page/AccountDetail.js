import React from 'react';
import { useParams } from 'react-router-dom';

function AccountDetail(props) {
    let param = useParams();
    let account_show_ID = param.id_param;
    console.log(account_show_ID);
    return (
        <div >
            <h1>This is the AccountDetail </h1>
        </div>
    );
}

export default AccountDetail;