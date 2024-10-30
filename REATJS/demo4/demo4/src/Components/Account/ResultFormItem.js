import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";

function ResultFormItem(props) {
    let stateRedux = useSelector((state) => state);
    let listAccount = stateRedux.listAccount;


    let items = listAccount.map((account, index) => {
        return (
            <tr >
                <th scope="row"> {account.id} </th>
                <td> {account.email} </td>
                <td> {account.username} </td>
                <td> {account.fullname} </td>
                <td> {account.department} </td>
                <td> {account.position} </td>
                <td> {account.createDate} </td>
                <td>
                    <Button color="success"> Update </Button>
                </td>
                <td>
                    <Button color="warning"> Delete </Button>
                </td>
            </tr>
        )
    })

    return (
        <>
            {items}
        </>
    );
}

export default ResultFormItem;
