import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import styled from '@emotion/styled';
// import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
   const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: orange;   
  }
`; 

  return (
    <nav>
      {!isLoggedIn && (
       <StyledLink  to="/">
        Home
      </StyledLink>
      )}
      
      {isLoggedIn && (
        <StyledLink  to="/contacts">
          Contacts
        </StyledLink>
      )}
    </nav>
  );
};
