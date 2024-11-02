import React from "react";
import { Table } from "reactstrap";
import ResultFormItem from "./ResultFormItem";

function ResultForm(props) {
    let { listAccount, onHandleDelete, onHandleEdit } = props;


    return (
        <>
            <br />
            <h3>Danh sách Account</h3>
            <br />
            <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Fullname</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Create Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <ResultFormItem
                        listAccount={listAccount}
                        onHandleDelete={onHandleDelete}
                        onHandleEdit={onHandleEdit}
                    />

                </tbody>
            </Table>
        </>
    );
}


export default ResultForm;
