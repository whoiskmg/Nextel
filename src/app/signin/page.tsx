"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cellPhone, setCellPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    type Response = {
        Success: boolean;
        Message: string;
        Result: any | null;
        Exception: any | null;
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://store.vrunibex.com/mobile2/mbUser/RegisterUser",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        Main: {
                            FirstName: firstName,
                            LastName: lastName,
                            CellPhone: cellPhone,
                            Email: email,
                            Password: password,
                        },
                    }),
                }
            );

            const data: Response = await response.json();
            if (data.Success === true) {
                setMessage(data.Message);
            } else {
                console.error("Login failed:", response.status);
                setMessage(data.Message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <main className="LogIn container mx-auto">
            <div>
                <h1 className="Header">Kayıt Ol</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">İsim</span>
                            </div>
                            <input
                                className="input"
                                placeholder="Buraya İsim Giriniz."
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Soyisim</span>
                            </div>
                            <input
                                className="input"
                                placeholder="Buraya Soyisim Giriniz."
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Telefon</span>
                            </div>
                            <input
                                className="input"
                                placeholder="Buraya Telefon Numarası Giriniz."
                                type="tel"
                                id="cellPhone"
                                value={cellPhone}
                                onChange={(e) => setCellPhone(e.target.value)}
                                required
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">E-Posta</span>
                            </div>
                            <input
                                className="input"
                                placeholder="Buraya E-Postanızı Giriniz."
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Şifre</span>
                            </div>
                            <input
                                className="input"
                                placeholder="Buraya Şifren Giriniz."
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>

                        <button
                            className="btn btn-primary btn-wide mt-4 text-lg"
                            type="submit"
                        >
                            Register
                        </button>
                    </form>
                </div>
                <div className="pt-4">
                    <h4>
                        Zaten bir hesabınız mı var?
                        <Link
                            className="text-primary ps-2"
                            href={"/login"}
                        >
                            Giriş Yap
                        </Link>
                    </h4>
                </div>
                {message != null ? (
                    <p className="pt-4 text-xl font-semibold">{message}</p>
                ) : (
                    <p></p>
                )}
            </div>
        </main>
    );
}
