'use client'
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { MdDocumentScanner } from "react-icons/md";
import { FaPeopleGroup, FaWalkieTalkie } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { useRouter } from "next/navigation";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    name: "Resume Scanner",
    href: "/resume-scanner",
    icon: MdDocumentScanner,
  },
  {
    name: "Opportunities",
    href: "/opportunities",
    icon: FaPeopleGroup,
  },
  {
    name: "Courses",
    href: "/courses",
    icon: IoIosSchool,
  },
  {
    name: "Talk to B0b",
    href: "/chatbot",
    icon: FaWalkieTalkie,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: IoPersonCircle,
  },
];

function Sidebar() {
  const router = useRouter();
  const { isCollapsed, toggleSidebarCollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <aside className="sidebar bg-white" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={2000}
            height={80}
            className="sidebar__logo"
            src="/logo.jpg"
            alt="logo"
          />
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;