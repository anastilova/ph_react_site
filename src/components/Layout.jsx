import React, { useState } from "react";
import style from "./Navbar.module.css";
import Logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  /*ниже ХукЮзСтейт - функция для хранения состояния
  какого-либо компонента в функциональном компоненте
  принимает аргумент как начальное значение состояния и возвращает массив из двух эл.
  1 эл.- текущее значение состояния Пример: это в закрытом положение меню
  2 функция котор. обновляет это состояние  Пример: это бургер_меню*/
  const [nav, setNav] = useState(false);
  return (
    <>
      <header className={style.header}>
        <div className="container">
          <div className={style.box}>
            <div className={style.logo_image}>
              <a href="/">
                <img src={Logo} alt="/" />
              </a>
            </div>
            <ul
              className={
                nav ? [style.menu, style.active].join(" ") : [style.menu]
              }
            >
              <Link to="/gallery">Галерея</Link>
              <Link to="/products">Услуги</Link>
              <Link to="/shop">Магазин</Link>
              <Link to="/contacts">Контакты</Link>
            </ul>
            {/* ниже вызываем состояние чтоб изменить на противоположное для иконок реакта */}
            <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
              {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <footer>2023</footer>
    </>
  );
};

export { Layout };
