import React from 'react';

const CloseMenuBtn = (props) => {
  const {onCloseMenuBtnClick} = props;
  return (
    <button className="page-header__close-menu-btn close-menu-btn" onClick={onCloseMenuBtnClick}>
      <img className="close-menu-btn__icon" src="./img/close-btn.svg" alt="Крестик"  width="13" height="13" />
    </button>
  );
};

export default CloseMenuBtn;