import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    function handleLogout() {
        // Hapus token dari localStorage
        localStorage.removeItem("token");

        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        // Arahkan pengguna ke halaman sign-in
        navigate("/login");
    }

    return (
        <div
            onClick={handleLogout}
            >
            Logout
        </div>
    );
}
