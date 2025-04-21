import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Statistics", href: "/statistics", current: false },
  { name: "Cams", href: "/cams", current: false },
];

interface NavBarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavBarProps) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Wetter Dashboard Grabner</a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navigation.map((item) => {
                const pathName = usePathname();
                return (
                  <li key={item.name} className="nav-item">
                    <Link
                      href={item.href}
                      className={`nav-link ${
                        item.href === pathName ? "active" : ""
                      }`}
                      aria-current={item.href === pathName ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="form-check form-switch ms-auto">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onChange={toggleTheme}
                checked={theme === "dark"}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {theme === "dark" ? <Moon /> : <Sun />}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
