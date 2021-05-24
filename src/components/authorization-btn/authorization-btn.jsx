import React from 'react';

const AuthorizationLink = () => {
  return (
    <button type="button" className="page-header__authorization-btn">
      <svg className="page-header__authorization-icon" width="20" height="22" >
        <use xlinkHref="#enter-icon"></use>
      </svg>
      <span>Войти в Интернет-банк</span>
    </button>
  );
};

export default AuthorizationLink;