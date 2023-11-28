import React from "react";
import { Outlet, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
 
import {  ReactComponent as HomeIcon } from '../assets/icons/home.svg'
import {  ReactComponent as ClientesAssociadosIcon } from '../assets/icons/clientes-associados.svg'
import {  ReactComponent as PedidosCanceladosIcon } from '../assets/icons/pedidos-cancelados.svg'

import {  ReactComponent as ChatIcon } from '../assets/icons/chat.svg'
import {  ReactComponent as HomeFilialIcon } from '../assets/icons/home-filial.svg'
import {  ReactComponent as QuestionIcon } from '../assets/icons/question.svg'
import logo from '../assets/img/logo.png'



function Layout() {
    return (
        <div className="page">
            <div className="sidebar">
            <img  src={logo} className ="logo"/>
                <h2 className="Name" >Descartech</h2>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link>
                        <Link to="">
                       
                            <div className="sidebar-button">
                                <HomeIcon/>
                                <p>Home</p>
                            </div>
                        </Link>
                    </Nav.Link>
                    <Nav.Link eventKey="link-1">
                        <Link to="clientes-associados">
                            <div className="sidebar-button">
                                <ClientesAssociadosIcon/>
                                <p>Clientes Associados</p>
                            </div>
                        </Link>
                    </Nav.Link>
                    <Nav.Link eventKey="link-2">
                        <Link to="detalhes-da-filial">
                            <div className="sidebar-button">
                                <HomeFilialIcon/>
                                <p>Detalhes da Filial</p>
                            </div>
                        </Link>
                    </Nav.Link>
                    <Nav.Link eventKey="link-3">
                        <Link to="FAQ">
                            <div className="sidebar-button">
                                <QuestionIcon/>
                                <p>FAQ</p>
                            </div>
                        </Link>
                    </Nav.Link>
                    <Nav.Link eventKey="link-5">
                        <Link to="Perguntas">
                            <div className="sidebar-button">
                                <ChatIcon/>
                                <p>Perguntas</p>
                            </div>
                        </Link>
                    </Nav.Link>
                </Nav>
            </div>
            <div className="content">
                <Container>
                  
                    <Container>
                        <Outlet />
                    </Container>
                </Container>
            </div>
        </div>
    )
}

export default Layout;