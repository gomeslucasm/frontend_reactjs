import React,{useState,/* useEffect */} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavLink,
    NavItem,
/*     NavbarBrand, */
    Nav,
    Modal,
/*     ,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, */
    /* Button, */
  } from 'reactstrap';
import UserService from '../../../../Service/UserService';
import LoginForm from '../../../LoginForm';

import './index.css'

const userService = new UserService();

function  NavHeader(){

    const [isOpen, setIsOpen] = useState(false);
    const [isLogged , setIsLogged] = useState(userService.is_logged());
    const [modal, setModal] = useState(false);

    const modal_toggle = () => setModal(!modal);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <>
        <div>           
            <Navbar color="dark" light expand="sm" 
            id = 'nav-bar'>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>   
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Página inicial</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/animais/">Animais</NavLink>
                        </NavItem>
                        <NavItem>
                            {!isLogged &&
                                <NavLink type = 'button' onClick={modal_toggle}
                                >Login
                                </NavLink>
                            }
                            {isLogged &&
                                <NavLink type = 'button' 
                                onClick={async ()=>{
                                    await userService.logout();
                                    setIsLogged(false)
                                }}
                                >Logout
                                </NavLink>
                            }
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

        {isLogged &&
            <div>
            <Navbar color="info" light expand="sm" 
            id = 'nav-bar'>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>   
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/adicionar/animal/">Registrar animal</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/animais/">Registrar adoção</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>}
        <Modal isOpen={modal} toggle={modal_toggle}>
            <div style = {{padding:'5%'}}>
                <LoginForm 
                loggedCallback = {async (val)=>{
                    await setIsLogged(val)
                    if(val){
                        setModal(false)
                    }
                }}
                />
            </div>
        </Modal>
        </>
    )
    
}



export default NavHeader;