import useUser from "../../hooks/useUser";  
import Logout from "../logout/logout";

export default function Home() {
    const user = useUser(); // Pastikan hook ini mengembalikan data user dengan benar.

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <h2>Selamat datang di dashboard kelompok 3</h2>
            <div>
                <h1>Hallo, {user?.username}!</h1>
            </div>
            <div className="mt-4">

            <Logout />
            </div>
        </div>
    );
}
