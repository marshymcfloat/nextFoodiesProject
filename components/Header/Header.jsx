import Link from "next/link";
import logo from "@/public/images/logo.png";
import classes from "./Header.module.css";
import Image from "next/image";
import HeaderBackground from "./Header-Background";
import NavLink from "./Navlink";
export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <h1>
          <Link href={"/"} className={classes.logo}>
            <Image src={logo} alt="bunch of food on a plate" priority />
            NextLevelFoodies
          </Link>
        </h1>
        <nav className={classes.nav}>
          <ul>
            <NavLink href="/meals">Browse Meals</NavLink>
            <NavLink href="/community">Foodies community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
