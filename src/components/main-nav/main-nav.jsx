import React from 'react';

const MainNav = (props) => {
  const {place, listModifier=''} = props;
  const navClass = place + '__main-nav';
  return (
    <nav className={`${navClass} main-nav`}>
      <ul className={`main-nav__list ${listModifier}`}>
        <li className="main-nav__item">
          <a href="#." className="main-nav__link">Услуги</a>
        </li>
        <li className="main-nav__item">
          <a href="#." className="main-nav__link">Рассчитать кредит</a>
        </li>
        <li className="main-nav__item">
          <a href="#." className="main-nav__link">Конвертер валют</a>
        </li>
        <li className="main-nav__item">
          <a href="#." className="main-nav__link">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
