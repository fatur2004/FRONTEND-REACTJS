import { FormEvent } from "react";
import apifetch from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import loginIllustration from "../../assets/image/amico1.png";

export default function Login() {
    const rout = useNavigate();

    async function handleSubmit(ev: FormEvent) {
        ev.preventDefault();
        const { username, password } = ev.target as typeof ev.target & {
            username: { value: string };
            password: { value: string };
        };

        try {
            const response = await apifetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    username: username.value,
                    password: password.value,
                },
            });

            if (response.status >= 400) {
                throw new Error(response.data.message);
            }

            const data = await response.data;
            localStorage.setItem("token", data.token);
            sessionStorage.setItem("user", JSON.stringify(data.user));

            rout("/dashboard");
        } catch (err) {
            console.error(err);
            if (err instanceof Error) {
                alert(err.message);
                return;
            }
            alert("Ada Masalah Pada Server");
        }
    }

    return (
        <div className="flex min-h-screen scroll-smooth">
            {/* Form Section */}
            <div className="w-1/2 flex items-center justify-center">
                <div className="p-8 rounded-lg shadow-lg w-96 bg-teal-500">
                    <h2 className="text-2xl font-bold text-center text-white mb-6">
                        Login
                    </h2>
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
                                name="username"
                                id="username"
                                placeholder="Alisultn"
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
                                name="password"
                                id="password"
                                placeholder="********"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 mb-3"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white hover:bg-teal-800 text-teal-500 font-medium py-2 px-4 rounded-md transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                    <div className="mt-30 text-center">
                        <span className="text-black text-sm">Belum punya akun? </span>
                        <button
                            onClick={() => rout("/register")}
                            className="text-blue-900 hover:underline text-sm font-medium"
                        >
                            Daftar
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-1/2 flex items-center justify-center">
                <img
                    src={loginIllustration}
                    alt="Login Illustration"
                    className="w-100"
                />
            </div>
        </div>
    );
}
