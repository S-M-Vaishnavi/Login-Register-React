import { useEffect, useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import { UserDetailsApi } from "../services/Api"
import { logout,isAuthenticated } from "../services/Auth"
import NavBar from "../components/NavBar"

export default function DashboardPage() {
    const navigate = useNavigate();

    const [user, setUser] = useState({ name: "", email: "", localId: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isAuthenticated()) {
            UserDetailsApi().then((response) => {
                setUser({
                    name: response.data.users[0].displayName,
                    email: response.data.users[0].email,
                    localId: response.data.users[0].localId,
                });
                setLoading(false); 
        
            });
        }
    }, []);

    const logoutUser = () => {
        logout();
        navigate('/login');
    };

    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <NavBar logoutUser={logoutUser} />
            <main role="main" className="container mt-5">
                <div className="container">
                    <div className="text-center mt-5">
                        <h3>Dashboard page</h3>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div>
                                <p className="text-bold">Hi <b>{user.name}</b></p>
                                <p>Your email is <b>{user.email}</b></p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}