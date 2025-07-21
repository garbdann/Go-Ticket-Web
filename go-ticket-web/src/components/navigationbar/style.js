import styled, { keyframes } from 'styled-components';
import { Navbar } from 'react-bootstrap';

const slideIn = keyframes`
  from {
    transform: translateX(-260px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const StyledSidebar = styled(Navbar)`
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  padding-top: 60px;
  border-right: 1px solid #444;
  background-color: #000;
  color: white;
  animation: ${slideIn} 0.3s ease-out forwards;

  .navbar-brand,
  .nav-link,
  .dropdown-toggle {
    color: white !important;
  }

  .dropdown-menu {
    background-color: #111;
    border: none;
  }

  .dropdown-item {
    color: white;

    &:hover {
      background-color: #222;
    }
  }
`;

export const StyledToggleButton = styled.button`
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.sidebarVisible ? '260px' : '10px')};
  z-index: 1050;
  padding: 10px 14px;
  font-size: 20px;
  background-color: #212529;
  color: white;
  border: none;
  border-radius: 4px;
  transition: left 0.3s ease;
  cursor: pointer;
`;
