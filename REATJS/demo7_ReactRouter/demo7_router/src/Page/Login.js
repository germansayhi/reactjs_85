import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    let navigate = useNavigate();
    let handleRegister = () => {
        navigate('/signup');
    };
    return (
        <div>
            <div class="container">
                <h2>Vertical (basic) form</h2>
                <form action="/action_page.php">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" name="remember" /> Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                    <button onClick={handleRegister} type="button" class="btn btn-danger">Register</button>
                </form>
            </div>

        </div>
    );
}

export default Login;