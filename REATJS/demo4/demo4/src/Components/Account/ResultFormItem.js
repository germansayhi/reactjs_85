import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
    let { listAccount } = props;
    console.log(listAccount);
    let items = listAccount.map((account, index) => {
        return (
            <tr >
                <th scope="row"> {index + 1} </th>
                <td> {account.email} </td>
                <td> {account.username} </td>
                <td> {account.fullname} </td>
                <td> {account.department} </td>
                <td> {account.position} </td>
                <td> {account.createDate} </td>
                <td>
                    <Button color="warning"> Edit </Button>
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
