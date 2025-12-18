import './Login.css';

const Login = () => {
  return (
    <div className="parent-div">
      <div className="left-sec"></div>

      <div className="right-sec">
        <div className="form-section">
          <div className="top-img">
            <img
              src="https://www.pngplay.com/wp-content/uploads/1/Login-PNG-Royalty-Free.png"
              alt="Login"
            />
          </div>

          <div className="form-details">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>

              <button type="submit" className="button">
                Login
              </button>
            </form>

            <div className="additional-options">
              <p>Don't have an account? <strong> Sign Up</strong> </p>
              <p>or</p>
            </div>

            <button type="button" className="login-with-google-btn">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
