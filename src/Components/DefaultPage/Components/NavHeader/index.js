import React,{useState,useEffect} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavLink,
    NavItem,
    Button,
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
import {useSelector,useDispatch} from 'react-redux'
import {is_logged, login, logout} from '../../../../Store/Login/login.actions'

const userService = new UserService();

function  NavHeader(){

    const [isOpen, setIsOpen] = useState(false);
    const [secondIsOpen, setSecondIsOpen] = useState(false)
    const isLogged = useSelector(state => state.login)
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();

    console.log('teste-nav', isLogged)

    const modal_toggle = () => setModal(!modal);
    const toggle = () => setIsOpen(!isOpen);
    const second_toggle = () => setSecondIsOpen(!secondIsOpen); 

    useEffect(/* async */ () =>{
        dispatch(is_logged())
    })
    

    return(
        <>
        <div>  
            <Navbar color="dark" light expand="sm" 
            id = 'nav-bar'>
                <Button 
                onClick={toggle}
                style = {{textAlign: 'center', width: '100%'}}
                id = 'toggler-button'>
                    Menu
                </Button> 
                

                <Collapse isOpen={isOpen} navbar>   
                 
                    <Nav className="mr-auto" navbar>
                        <NavItem id = 'nav-item'>
                            <NavLink href="/">Página inicial</NavLink>
                        </NavItem>
                        <NavItem id = 'nav-item'>
                            <NavLink href="/animais/">Animais</NavLink>
                        </NavItem>
                        <NavItem id = 'nav-item'>
                            {!isLogged &&
                                <NavLink onClick={modal_toggle}
                                >Login
                                </NavLink>
                            }
                            {isLogged &&
                                <NavLink 
                                onClick={()=>{
                                    dispatch(logout())
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

                <Button 
                style = {{textAlign: 'center', width: '100%'}}
                onClick={second_toggle}
                id = 'toggler-button'
                >
                    Administração
                </Button> 

                <Collapse isOpen={secondIsOpen} navbar>   
                    <Nav className="mr-auto" navbar>
                        <NavItem id = 'nav-item'>
                            <NavLink href="/adicionar/animal/">Registrar animal</NavLink>
                        </NavItem >
                        <NavItem id = 'nav-item'>
                            <NavLink href="/animais/">Registrar adoção</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>}
        <Modal isOpen={modal} toggle={modal_toggle}>
            <div style = {{padding:'5%'}}>
                <LoginForm 
                loginCallback = {(val)=>{
                    console.log('login', val)
                    setModal(!modal)
                    dispatch(login())}
                }
                />
            </div>
        </Modal>
        </>
    )
    
}



export default NavHeader;