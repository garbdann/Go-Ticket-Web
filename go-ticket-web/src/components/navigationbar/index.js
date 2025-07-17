import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Dropdown } from 'react-bootstrap';
import { StyledNavbar, StyledNav } from './style';

export default function NavigationBar() {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false); // toggle state

  return (
    <div style={{ display: 'flex' }}>
      {/* Botão para abrir/fechar a navbar */}
      <button
        onClick={() => setShowNavbar(!showNavbar)}
        style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          zIndex: 1000,
          padding: '10px',
        }}
      >
        ☰
      </button>

      {/* Navbar lateral */}
      {showNavbar && (
        <div
          style={{
            width: '250px',
            height: '100vh',
            backgroundColor: '#f8f9fa',
            borderRight: '1px solid #ccc',
            paddingTop: '60px',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingLeft: '20px',
            gap: '20px'
          }}
        >
          <h2 style={{ color: 'black' }}>GoTicket!</h2>

          <Dropdown>
            <Dropdown.Toggle
              style={{
                background: 'none',
                border: 'none',
                color: 'black',
                fontSize: '20px',
                padding: 0,
              }}
            >
              Eventos
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate('/registerEvent')}>
                Cadastrar evento
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/meus-eventos')}>
                Meus eventos
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: 'none',
              color: 'black',
              fontSize: '20px',
              padding: 0,
            }}
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
}
