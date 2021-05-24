import React from 'react';

const BurgerBtn = (props) => {
  const {onBurgerBtnClick} = props;
  return (
    <button className="page-header__burger-btn burger-btn" onClick={onBurgerBtnClick} type="button">
      Открыть меню
      <span className="burger-btn__line"></span>
    </button>
  );
};

export default BurgerBtn;