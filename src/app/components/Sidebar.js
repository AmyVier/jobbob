'use client'
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { useRouter } from "next/navigation";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "Resume Scanner",
    href: "/resume-scanner",
    icon: BsPeople,
  },
  {
    name: "Opportunities",
    href: "/opportunities",
    icon: FiMail,
  },
  {
    name: "Courses",
    href: "/courses",
    icon: TiContacts,
  },
  {
    name: "Talk to B0b",
    href: "/chatbot",
    icon: TiContacts,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: TiContacts,
  },
];

function Sidebar() {
  const router = useRouter();
  const { isCollapsed, toggleSidebarCollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarCollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
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