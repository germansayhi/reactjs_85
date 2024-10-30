import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useSelector } from "react-redux";

function InputForm(props) {
    let { onHandleCreateNewAccount } = props;

    let stateRedux = useSelector((state) => state)
    let listDepartment = stateRedux.listDepartment;
    let listPosition = stateRedux.listPosition;


    // khai báo State lưu trữ giá tri của ô nhâp liệu
    let [Email, setEmail] = useState("");
    let [Username, setUsername] = useState("");
    let [Fullname, setFullname] = useState("");
    let [Department, setDepartment] = useState("");
    let [Position, setPosition] = useState("");

    //
    let departmentItems = listDepartment.map((dep) => {
        return <option value={dep.id}>{dep.name}</option>;
    })

    let positionItems = listPosition.map((pos) => {
        return <option value={pos.id}>{pos.name}</option>;
    })


    let handleCreate = () => {
        let accountNew = {
            email: Email,
            username: Username,
            fullname: Fullname,
            departmentId: Department,
            positionId: Position,
            createDate: new Date()
        };
        onHandleCreateNewAccount(accountNew);
    };
    return (
        <>
            <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                    id="Email"
                    name="email"
                    placeholder="Input Email"
                    type="email"
                    value={Email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Label for="Username">Username</Label>
                <Input
                    id="Username"
                    name="email"
                    placeholder="Input Username"
                    type="text"
                    value={Username}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Label for="Fullname">Fullname</Label>
                <Input
                    id="Fullname"
                    name="email"
                    placeholder="Input Fullname"
                    type="text"
                    value={Fullname}
                    onChange={(event) => {
                        setFullname(event.target.value);
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Label for="exampleSelect">Select a Department</Label>
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                    value={Department}
                    onChange={(event) => {
                        setDepartment(event.target.value);
                    }}
                >
                    {departmentItems}
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="exampleSelect">Select a Position</Label>
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                    value={Position}
                    onChange={(event) => {
                        setPosition(event.target.value);
                    }}
                >
                    {positionItems}
                </Input>
            </FormGroup>

            <Button color="secondary" onClick={handleCreate}>
                Create
            </Button>
            <Button color="info">Reset</Button>
        </>
    );
}

export default InputForm;
