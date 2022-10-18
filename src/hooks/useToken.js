import axios from "axios";
import { useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('')
    if (user?.user) {
        const data = { name: user?.user?.displayName, email: user?.user?.email };

        (async function () {
            const res = await axios.put('http://localhost:5000/api/v1/user', data)
            if (res.status === 200) {
                const data = res.data;
                localStorage.setItem('accessToken', data.token)
                setToken(data.token)
            }
        })()
    }
    return [token]
};

export default useToken;