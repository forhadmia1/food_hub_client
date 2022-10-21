import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useAdmin = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        if (user) {
            const email = user.email;
            fetch(`http://localhost:5000/api/v1/user?email=${email}`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    setAdmin(data.isAdmin)
                    setAdminLoading(false)
                })
        }
    }, [user])

    return [admin, adminLoading];
};

export default useAdmin;