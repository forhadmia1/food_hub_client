import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const RequiteAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    const [admin, adminLoading] = useAdmin()

    if (adminLoading || loading) {
        return <p>Loading....</p>
    }

    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequiteAdmin;