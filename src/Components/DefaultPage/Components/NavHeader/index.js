import React, { useState } from "react";
import {
  Modal,
} from "reactstrap";
import LoginForm from "../../../LoginForm";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../Store/Login/login.actions";
/* import UserService from "../../../../Service/UserService"; */
import { Link} from "react-router-dom";
/* 
const userService = new UserService(); */

const NavBarItem = ({ children, itemStyle, id }) => {
  return (
    <div className="custom-nav-item" id = {id} style={itemStyle}>
      {children}
    </div>
  );
};

const NavBarButton = ({ children, itemStyle, hRef, link = true, onClick }) => {
  if (link) {
    return (
      <>
        <Link className="custom-nav-link" to={hRef}>
          {children}
        </Link>
      </>
    );
  } else {
    return (
      <>
        <div className="custom-nav-link" onClick={onClick}>
          {children}
        </div>
      </>
    );
  }
};

function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const isLogged = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const toggle = () => setIsOpen(!isOpen);
  console.log(isLogged);

  return (
    <>
      <div className="custom-nav">
        <div className="custom-navbar" id="nav-bar-first">
          <NavBarItem id = 'nav-item-initial-page'>
            <NavBarButton hRef="/">Página inicial</NavBarButton>
          </NavBarItem>
          <NavBarItem>
            <NavBarButton hRef="/animais/">Animais</NavBarButton>
          </NavBarItem>
          <NavBarItem id = 'nav-item-login'>
            {!isLogged && (
              <NavBarButton
                link={false}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Login
              </NavBarButton>
            )}
            {isLogged && (
              <NavBarButton
                link={false}
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </NavBarButton>
            )}
          </NavBarItem>
        </div>
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div id="modal-login-form-wrapper">
          <LoginForm
            loginCallback={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
      </Modal>
    </>
  );
}

export default NavHeader;
