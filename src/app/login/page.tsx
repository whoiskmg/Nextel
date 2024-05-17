"use client";

import Link from "next/link";
import { useState } from "react";

export default function LogIn() {
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
                "https://store.vrunibex.com/mobile2/mbUser/Login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        Email: email,
                        Password: password,
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
            <div className="">
                <div>
                    <h1 className="Header">Giriş Yap</h1>

                    <div className="Form">
                        <form
                            className=""
                            onSubmit={handleSubmit}
                        >
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
                                    placeholder="Buraya Şifrenizi Giriniz."
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </label>
                            <button
                                className="btn btn-primary btn-wide mt-4 text-lg"
                                type="submit"
                            >
                                Giriş Yap
                            </button>
                        </form>
                    </div>
                </div>
                <div className="pt-4">
                    <h4>
                        Hesabınız yok mu?
                        <Link
                            className="text-primary ps-2"
                            href={"/signin"}
                        >
                            Hesap Oluştur
                        </Link>
                    </h4>
                </div>
                {message != null ? (
                    <p className="pt-2 text-lg">{message}</p>
                ) : (
                    <p></p>
                )}
            </div>
        </main>
    );
}
