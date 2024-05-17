import { Key } from "react";

const Footer = ({ data }: any) => {
    return (
        <div className="mt-8">
            <footer className="footer p-10 bg-primary text-primary-content">
                <aside>
                    <img
                        src={"/logo/Vestel-V.jpg"}
                        alt=""
                        width={64}
                        height={64}
                    />
                    <p>
                        Vestel
                        <br />
                        Vestel’le Olur, Neden Olmasın?
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    {data.Result.TreeList.map(
                        (item: any, key: Key) =>
                            item.DisplayOrder > 0 && (
                                <a
                                    href=""
                                    key={key}
                                >
                                    {item.DisplayName}
                                </a>
                            )
                    )}
                </nav>
                <nav>
                    <h6 className="footer-title">VESTEL.COM.TR FARKI</h6>
                    <a className="link link-hover">24 Saatte Teslim</a>
                    <a className="link link-hover">Güvenli Alışveriş</a>
                    <a className="link link-hover">E-Randevu</a>
                    <a className="link link-hover">Detaylı Kargo Takibi</a>
                </nav>
                <nav>
                    <h6 className="footer-title">KURUMSAL</h6>
                    <a
                        href=""
                        className="link link-hover"
                    >
                        Kurumsal
                    </a>
                    <a
                        href=""
                        className="link link-hover"
                    >
                        Medya ilişkileri
                    </a>
                    <a
                        href=""
                        className="link link-hover"
                    >
                        İhracat Şampiyonu Vestel
                    </a>
                </nav>
            </footer>
        </div>
    );
};
export default Footer;
