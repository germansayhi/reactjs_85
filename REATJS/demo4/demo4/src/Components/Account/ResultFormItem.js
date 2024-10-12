import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
    return (
        <>
            <tr>
                <th scope="row"> 1 </th>
                <td> bqd122002@gmail.com </td>
                <td> bqduc </td>
                <td> Bùi Quang Đức </td>
                <td> IT </td>
                <td> Dev </td>
                <td> 2023-01-01 </td>
                <td>
                    <Button color="warning"> Edit </Button>
                </td>
                <td>
                    <Button color="warning">Delete</Button>
                </td>
            </tr>
        </>
    );
}

export default ResultFormItem;
