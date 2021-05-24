import React, {PureComponent} from 'react';
import BurgerBtn from '../burger-btn/burger-btn';
import Logo from '../logo/logo';
import CloseMenuBtn from '../close-menu-btn/close-menu-btn';
import MainNav from '../main-nav/main-nav';
import AuthorizationBtn from '../authorization-btn/authorization-btn';

class PageHeader extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: false
    }
    this.handleActiveMenu = this.handleActiveMenu.bind(this);
  }

  handleActiveMenu() {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  }

  render() {
    return (
      <header className={`page-header${this.state.activeMenu ? ' page-header--opened' : ''}`}>
        <div className="page-header__wrapper">
          <BurgerBtn onBurgerBtnClick={this.handleActiveMenu} />
          <Logo />
          <CloseMenuBtn onCloseMenuBtnClick={this.handleActiveMenu} />
          <MainNav place="page-header" />
          <AuthorizationBtn />
        </div>
      </header>
    );
  }
}

export default PageHeader;