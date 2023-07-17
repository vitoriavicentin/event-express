import Link from "next/link";

const NavItem = ({ text, href, active }) => {
  const navItemClassName = `nav__item ${active ? "active" : ""}`;

  return (
    <Link href={href}>
      <span className={navItemClassName}>{text}</span>
    </Link>
  );
};

export default NavItem;
