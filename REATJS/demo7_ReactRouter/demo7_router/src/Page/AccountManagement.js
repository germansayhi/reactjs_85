import React, { useState } from "react";
import { Link } from "react-router-dom";

function AccountManagement(props) {
    let listAccount_API_FAKE = [
        {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com"
        },
        {
            id: 2,
            name: "Jane Doe",
            email: "janedoe@example.com"
        },
        {
            id: 3,
            name: "Tom Doe",
            email: "tomdoe@example.com"
        }
    ];
    let [listAccount, setListAccount] = useState(listAccount_API_FAKE);
    let items = listAccount.map((acc) => {
        return (
            <tr>
                <td>{acc.id}</td>
                <td>{acc.name}</td>
                <td><Link to={"/accountDetail/" + acc.id}>{acc.email} </Link></td>
                <td>
                    <button type="button" class="btn btn-danger">
                        Edit
                    </button>{" "}
                    <button type="button" class="btn btn-default">
                        Delete
                    </button>
                </td>
            </tr>
        )
    });
    return (
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AccountManagement;
