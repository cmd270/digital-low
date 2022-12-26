import React from 'react';
import Header from '../Header'
import { Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div className="navbar">
    <Header />
    <li>
      <Link to="/">Главная</Link>
    </li>
    <li>
      <Link to="/about">О проектe</Link>
    </li>
    <li>
      <Link to="/photos">Фотографии</Link>
    </li>
    <li>
      <Link to="/models">Модели старых телефонов</Link>
    </li>
    <li>
      <Link to="/contacts">Ссылки</Link>
    </li>
  </div>
  );
}
export default Navbar;
