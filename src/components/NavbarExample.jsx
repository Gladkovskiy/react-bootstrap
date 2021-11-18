import React from 'react'
import {Navbar, Button, Nav, Container} from 'react-bootstrap'
import {
  MAIN_ROUTE,
  COMPONENT_1_ROUTE,
  COMPONENT_2_ROUTE,
  COMPONENT_3_ROUTE,
} from '../utils/const'
import {useMatch, useNavigate, Link} from 'react-router-dom'

const NavbarExample = () => {
  const linkInfo = [
    {path: MAIN_ROUTE, name: 'Главная'},
    {path: COMPONENT_1_ROUTE, name: 'Компонент 1'},
    {path: COMPONENT_2_ROUTE, name: 'Компонент 2'},
    {path: COMPONENT_3_ROUTE, name: 'Компонент 3'},
  ]
  const navigate = useNavigate()
  const Active = path => !!useMatch(path)

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={MAIN_ROUTE} className="text-light fw-bold">
          REACT BOOTSTRAP
        </Link>
        <Nav className="ms-auto">
          {linkInfo.map(({path, name}) => (
            <Button
              key={path}
              variant="outline-light"
              className="ms-3 fw-bold"
              onClick={() => navigate(path)}
              disabled={Active(path)}
              style={{fontFamily: 'Roboto'}}
            >
              {name}
            </Button>
          ))}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarExample
