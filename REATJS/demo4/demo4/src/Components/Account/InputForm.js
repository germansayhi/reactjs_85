import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

function InputForm(props) {
    return (
        <>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Input Email"
                    type="email"
                />
            </FormGroup>

            <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input
                    id="exampleUsername"
                    name="email"
                    placeholder="Input Username"
                    type="text"
                />
            </FormGroup>

            <FormGroup>
                <Label for="exampleFullname">Fullname</Label>
                <Input
                    id="exampleFullname"
                    name="email"
                    placeholder="Input Fullname"
                    type="text"
                />
            </FormGroup>

            <FormGroup>
                <Label for="exampleSelect">Select a Department</Label>
                <Input id="exampleSelect" name="select" type="select">
                    <option>Giám Đốc</option>
                    <option>Bảo vệ</option>
                    <option>Nhân viên</option>
                    <option>Quản Lí</option>
                    <option>Kế Toán</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="exampleSelect">Select a Position</Label>
                <Input id="exampleSelect" name="select" type="select">
                    <option>Tester</option>
                    <option>Dev</option>
                    <option>Scrum Master</option>
                    <option>Manager</option>
                    <option>Staff</option>
                </Input>
            </FormGroup>

            <Button color="primary">Create</Button>
            <Button color="danger">Reset</Button>
        </>
    );
}

export default InputForm;
