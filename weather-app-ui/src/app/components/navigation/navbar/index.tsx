import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Statistics", href: "/statistics", current: false },
    { name: "Cams", href: "/cams", current: false},
    ];


export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-md">
            <a className="navbar-brand" href="/">Wetter Dashboard Grabner</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {navigation.map((item) => {
                        const pathName = usePathname();
                        return (
                            <li key={item.name} className="nav-item">
                                <Link href={item.href} className={`nav-link ${item.href === pathName ? "active" : ""}`} aria-current={item.href === pathName ? "page" : undefined}>
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
        </nav>
  </>
  );
}