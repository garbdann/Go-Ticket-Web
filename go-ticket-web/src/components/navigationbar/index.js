import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Nav, Dropdown } from 'react-bootstrap';
import { StyledSidebar, StyledToggleButton } from './style';
import { useUser } from '../../context/UserContext';


export default function NavigationBar() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <> 
      <StyledToggleButton
        onClick={() => setShowSidebar(!showSidebar)}
        sidebarVisible={showSidebar}
        aria-label={showSidebar ? 'Close sidebar' : 'Open sidebar'}
      >
        ☰
      </StyledToggleButton>

      {showSidebar ? (
        <StyledSidebar expand="lg" className="flex-column align-items-start">
          <StyledSidebar.Brand className="mb-4 ps-3" style={{ fontSize: '26px' }}>
            GoTicket!
          </StyledSidebar.Brand>

          <Nav className="flex-column w-100 px-3">
            {user && (
              <Nav.Link className="mb-3 ps-3" style={{ fontSize: '18px', color: 'white' }}>
                Olá, {user.username}!
              </Nav.Link>
            )}
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="nav-link text-start"
                style={{
                  fontSize: '18px',
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                Eventos
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate('/registerEvent')}>
                  Cadastrar evento
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link
              onClick={handleLogout}
              className="mt-3"
              style={{ fontSize: '18px', color: 'white' }}
            >
              Sair
            </Nav.Link>
          </Nav>
        </StyledSidebar>
      ) : null}
    </>
  );
}