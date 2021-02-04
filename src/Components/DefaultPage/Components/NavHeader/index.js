import React,{useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavLink,
    NavItem,
/*     NavbarBrand, */
    Nav,
/*     ,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, */
    /* Button, */
  } from 'reactstrap';

import './index.css'

function  NavHeader(){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>           
            <Navbar color="dark" light expand="sm" 
            id = 'nav-bar'>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>   
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Animais</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/components/">Doação</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
    
}



export default NavHeader;