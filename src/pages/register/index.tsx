import { FormEvent, useState } from "react";
import apifetch from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import loginIllustration from "../../assets/image/amico.png";

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(ev: FormEvent) {
        ev.preventDefault();

        try {
            const response = await apifetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    username,
                    password,
                },
            });

            if (response.status >= 400) {
                throw new Error(response.data.message);
            }

            alert("Registration successful!");
            navigate("/login");
        } catch (err) {
            console.error(err);
            if (err instanceof Error) {
                setError(err.message);
                alert(err.message);
            } else {
                alert("Ada masalah pada server");
            }
        }
    }

    return (
        <div className="flex min-h-screen">
            {/* Form Section */}
            <div className="w-1/2 flex items-center justify-center">
                <div className=" p-8 rounded-lg shadow-lg w-96 bg-teal-500">
                    <h2 className="text-2xl font-bold text-center text-white mb-6">
                        Register
                    </h2>
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-black mb-3 text-left"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Alisultn"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-black mb-3 text-left"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="***********"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 mb-3"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white hover:bg-teal-800 text-teal-500 font-medium py-2 px-4 rounded-md transition duration-300"
                        >
                            Register
                        </button>
                    </form>
                    <div className="mt-30 text-center">
                        <span className="text-black text-sm">Sudah punya akun? </span>
                        <button
                            onClick={() => navigate("/login")}
                            className="text-blue-900 hover:underline text-sm font-medium"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-1/2 flex items-center justify-center">
                <img
                    src={loginIllustration}
                    alt="gambar login"
                    className="w-4/6"
                />
            </div>
        </div>
    );
}