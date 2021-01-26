import React,{useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
/*     NavbarBrand, */
    Nav,
/*     NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, */
    Button,
  } from 'reactstrap';

import './index.css'

function  NavHeader(){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>           
            <Navbar color="dark" light expand="sm" 
            display = 'flex' >
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>   
                    <Nav className="mr-auto" navbar>
                        <Button >Adoção</Button>
                        <Button >Adoção</Button>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
    
}



export default NavHeader;