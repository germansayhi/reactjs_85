import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

function InputForm(props) {
    let { onHandleCreateNewAccount } = props;

    // khai báo State lưu trữ giá tri của ô nhâp liệu
    let [Email, setEmail] = useState("");
    let [Username, setUsername] = useState("");
    let [Fullname, setFullname] = useState("");
    let [Department, setDepartment] = useState("");
    let [Position, setPosition] = useState("");

    //
    let handleCreate = () => {
        // console.log("Email", Email);
        // console.log("Username", Username);
        // console.log("Fullname", Fullname);
        // console.log("Department", Department);
        // console.log("Position", Position);
        let accountNew = {
            id: 1,
            email: Email,
            username: Username,
            fullname: Fullname,
            department: Department,
            position: Position,
            createDate: 11 / 11 / 2024,
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
                    <option>Giám Đốc</option>
                    <option>Bảo vệ</option>
                    <option>Nhân viên</option>
                    <option>Quản Lí</option>
                    <option>Kế Toán</option>
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
                    <option>Tester</option>
                    <option>Dev</option>
                    <option>Scrum Master</option>
                    <option>Manager</option>
                    <option>Staff</option>
                </Input>
            </FormGroup>

            <Button color="primary" onClick={handleCreate}>
                Create
            </Button>
            <Button color="danger">Reset</Button>
        </>
    );
}

export default InputForm;
