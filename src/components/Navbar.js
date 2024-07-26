import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background: #111;
  color: #fff;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavbarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavbarItem = styled.li`
  margin: 0 1rem;

  &:last-child {
    margin-right: 2rem; /* Adjust this value as needed */
  }
`;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: color 0.3s;

  &:hover {
    color: #1e90ff;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarBrand>Anmol Mani Dubey</NavbarBrand>
      <NavbarList>
        <NavbarItem><NavbarLink to="home" smooth={true} duration={500}>Home</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink to="about" smooth={true} duration={500}>About</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink to="projects" smooth={true} duration={500}>Projects</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink to="contact" smooth={true} duration={500}>Contact</NavbarLink></NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;
