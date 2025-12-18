import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Oops! The page you're looking for does't exist</p>
            <Link to="/dashboard">Go back to Dashboard</Link>
        </div>
    );
}

export default NotFound;