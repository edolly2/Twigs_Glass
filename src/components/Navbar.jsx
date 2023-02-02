import styled from 'styled-components';

const TopNav = styled.nav``;

const NavList = styled.ul``;

const ListItem = styled.li``;

const Navbar = () => {
  return (
    <TopNav>
      <NavList>
        <ListItem>home</ListItem>
        <ListItem>about</ListItem>
        <ListItem>shop</ListItem>
        <ListItem>contact</ListItem>
      </NavList>
    </TopNav>
  );
};

export default Navbar;
