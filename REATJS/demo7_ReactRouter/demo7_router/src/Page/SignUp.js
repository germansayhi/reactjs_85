import React from "react";
import { useNavigate } from "react-router-dom"

function SignUp(props) {
    let navigate = useNavigate();
    let handleRegister = () => {
        // Lấy dữ liệu
        // Lưu trữ dữ liệu
        // Đăng kí thành công => chuyển sang trang login
        navigate("/login");
    };
    return (
        <div class="container">
            <h2>Form Register</h2>
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="fullname">Full Name:</label>
                    <input
                        type="text"
                        class="form-control"
                        id="fullname"
                        placeholder="Enter Fullname"
                        name="fullname"
                    />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                    />
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input
                        type="password"
                        class="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="pwd"
                    />
                </div>
                <div class="form-group">
                    <label for="pwd">Confirmation Password:</label>
                    <input
                        type="password"
                        class="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="pwd"
                    />
                </div>
                <div class="form-group">
                    <label for="date">Birthday:</label>
                    <input
                        type="date"
                        class="form-control"
                        id="date"
                        name="date"
                    />
                </div>
                <button type="button" class="btn btn-danger" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    );
}

export default SignUp;
<h1>Sign Up</h1>;
