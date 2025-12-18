import './Signup.css';

const SignUp = () => {
    return (
      <div className="parent-div">
        <div className="left-sec"></div>
  
        <div className="right-sec">
          <div className="form-section">
            <div className="top-img">
              <img
                src="https://t4.ftcdn.net/jpg/00/36/71/79/360_F_36717966_NE47aSRFkCRCnPhzTyH7mXv13stY6aKJ.webp"
                alt="Signup"
              />
            </div>
  
            <div className="form-details">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
  
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
  
                <div className="form-group">
                  <label htmlFor="renamePassword">Rename Password</label>
                  <input
                    type="password"
                    id="renamePassword"
                    placeholder="Enter your password again"
                  />
                </div>
  
                <button type="submit" className="button">
                  Sign Up
                </button>
              </form>
  
              <div className="additional-options">
                <p>Already have an account? <strong> Login</strong></p>
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
  
  export default SignUp;
  