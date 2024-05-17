"use client";

import Link from "next/link";
import { useState } from "react";

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [succes, setSucces] = useState(Boolean);

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
                setSucces(true);
                setMessage(data.Message);
            } else {
                setSucces(false);
                setMessage(data.Message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <main className="LogIn container mx-auto flex-grow">
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
            </div>
            {succes === true
                ? message && (
                      <div className="toast  whitespace-normal">
                          <div className="alert alert-succes">
                              <span>
                                  New message arrived.
                                  {message}
                              </span>
                          </div>
                      </div>
                  )
                : message && (
                      <div className="toast whitespace-normal">
                          <div className="alert alert-warning">
                              <span>{message}</span>
                          </div>
                      </div>
                  )}
        </main>
    );
}
