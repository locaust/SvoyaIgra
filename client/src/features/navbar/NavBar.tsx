import React from 'react';
import './styles/style.scss';
import { NavLink, Outlet } from 'react-router-dom';

function NavBar(): JSX.Element {
  return (
    <>
      <nav className="nav__container">
        <ul className="nav__ul">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/">
              Личный кабинет
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/question">
              Игра
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/users">
              Очки
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/dsfaasdf">
              Регистрация
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/asdfadsf">
              Авторизация
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/asdaf">
              Выйти
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
