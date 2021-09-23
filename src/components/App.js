import React, {useEffect, useState} from 'react';
import Contacto from "./Contacto";
import Servicios from "./Servicios";
import Nosotros from "./Nosotros";
import Inicio from "./Inicio";
import Login from './login'
import Registr from './Registro'
import Profile from '../pages/ProfilePage'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect, useHistory
} from "react-router-dom";

import image1 from "../imagenes/Logo.png";
import logo from "../imagenes/HomePageIMG/LogoUn.jpg"
import TestPage from "../pages/TestsPage";
import VisionPage from "../pages/VisionPage";
import {auth} from "../firebase";


import '../estyles/App.css'

import { Layout, Menu } from "antd";
const { SubMenu } = Menu;

const { Header, Footer } = Layout;

const MyComponent = () => {
    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();
        history.goBack()
    };

    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                console.log("uid", uid);
                setAuthUser(user);
            } else {
                // User is signed out
                console.log("No hay ssesion activa", user);
                setAuthUser(false);
            }
        });
    }, []);



    return (

        <Router >

            <Header className="main-header">
                <div className="logo">
                    <img src={image1} alt=""  />
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    className="main-menu"
                >
                    <Menu.Item>
                        <Link to="/">Inicio</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/">Servicios</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/">Acerca de nosotros</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/">Contactos</Link>
                    </Menu.Item>
                    {authUser === null ? null : authUser === false ? (
                        <>
                            <Menu.Item>
                                <Link to="/Registr">Registrarme</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/login">Iniciar sesión</Link>
                            </Menu.Item>
                        </>
                    ) : (
                        <Menu.Item>

                            <SubMenu key="SubMenu" title="Perfil">
                                <img alt="logo" src={logo} />
                                <Menu.Item>
                                    <Link to="/Profile">
                                        Tu cuenta
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="/Administrar">
                                        Administrar
                                    </Link>
                                </Menu.Item>
                                <Menu.Item onClick={handleLogout}>
                                    Cerrar sesión
                                </Menu.Item>
                            </SubMenu>

                        </Menu.Item>
                    )}

                </Menu>
            </Header>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact>
                        <Inicio />
                    </Route>
                    <Route path="/Servicios">
                        <Servicios />
                    </Route>
                    <Route path="/Contacto">
                        <Contacto />
                    </Route>
                    <Route path="/Nosotros">
                        <Nosotros />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/Registr">
                        <Registr />
                    </Route>
                    <Route path="/test">
                        {authUser === null ? (
                            "Cargando..."
                        ) : authUser === false ? (
                            <Redirect to="/login" />
                        ) : (
                            <TestPage  />
                        )}

                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/vision">
                        <VisionPage />
                    </Route>
                </Switch>
            <Footer>
                <div className="row ldc justify-content-md-center my-3">

                    <div className="col-12 col-md-3 box">
                        <h2 >Contacto</h2>
                        <div>
                            <p>Email: info@designerassets.in</p>
                            <p>Telefono: +91 9810744656</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 box">
                        <h2 >Redes Sociales</h2>
                        <div>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </div>

                    </div>

                    <div className="col-12 col-md-3 box">
                        <h2 >Servicios</h2>
                        <div>
                            <p>Mi perfil visual</p>
                            <p>Compruebe su vision en linea</p>
                            <p>Informacion sobre riesgos residuales</p>
                        </div>

                    </div>

                    <div align = "center" className="col-12 col-md-3">
                        <img src={logo} className="App-logo, imgRedonda" alt="logo" />
                    </div>

                </div>
            </Footer>
        </Router>
    );
}
export default MyComponent;
