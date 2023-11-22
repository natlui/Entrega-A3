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
import {  ReactComponent as DetalhesDescarteIcon } from '../assets/icons/detalhes-descarte.svg'



function Layout() {
    return (
        <div className="page">
            <div className="sidebar">
                <h2 >Descartech</h2>
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
                        <Link to="pedidos-cancelados">
                            <div className="sidebar-button">
                                <PedidosCanceladosIcon/>
                                <p>Pedidos Cancelados</p>
                            </div>
                        </Link>
                    </Nav.Link>
                    <Nav.Link eventKey="link-2">
                        <Link to="clientes-associados">
                            <div className="sidebar-button">
                                <ClientesAssociadosIcon/>
                                <p>Clientes Associados</p>
                            </div>
                        </Link>
                    </Nav.Link>
                    <Nav.Link eventKey="link-3">
                        <Link to="detalhes-da-filial">
                            <div className="sidebar-button">
                                <DetalhesDescarteIcon/>
                                <p>Detalhes da Filial</p>
                            </div>
                        </Link>
                    </Nav.Link>
                    <Nav.Link eventKey="link-4">
                        <Link to="FAQ">
                            <div className="sidebar-button">
                                <DetalhesDescarteIcon/>
                                <p>FAQ</p>
                            </div>
                        </Link>
                    </Nav.Link>
                </Nav>
            </div>
            <div className="content">
                <Container>
                    <Navbar className="bg-body-tertiary justify-content-between">
                        <Form inline>
                        </Form>
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar>
                    <Container>
                        <Outlet />
                    </Container>
                </Container>
            </div>
        </div>
    )
}

export default Layout;