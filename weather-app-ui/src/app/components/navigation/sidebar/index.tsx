import Link from "next/link";
import { X } from "lucide-react";

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
}


export const Sidebar = ({isOpen, toggle}: SidebarProps) => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
            <X size={30} color="black" />
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/test" onClick={toggle}><p>Test</p></Link>
          </li>
        </ul>
      </div>
    </>
  );
};
