import React from 'react';
import { useNavigate } from 'react-router';
import { StyledNavbar, StyledNav } from './style';
import { Dropdown } from 'react-bootstrap';

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <StyledNavbar expand="lg" sticky="top">
      <StyledNavbar.Brand style={{ color: 'black', fontSize: '30px' }}>
        GoTicket!
      </StyledNavbar.Brand>
      <StyledNavbar.Toggle aria-controls="basic-navbar-nav" />
      <StyledNavbar.Collapse id="basic-navbar-nav">
        <StyledNav>
          <Dropdown>
            <Dropdown.Toggle style={{ background: 'none', border: 'none', color: 'black', fontSize: '30px' }}>
              Eventos
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate('/cadastro-evento')}>
                Cadastrar evento
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/meus-eventos')}>
                Meus eventos
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <StyledNav.Link onClick={() => navigate('/')} style={{ color: 'black', fontSize: '30px' }}>
            Sair
          </StyledNav.Link>
        </StyledNav>
      </StyledNavbar.Collapse>
    </StyledNavbar>
  );
}
