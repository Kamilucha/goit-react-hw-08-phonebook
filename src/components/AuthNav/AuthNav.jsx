import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';


export const AuthNav = () => {
   const StyledLink = styled(NavLink)`
  color: white;
margin-right: 20px;

  &.active {
    color: orange;   
  }
`;  
  return (
    <div>
      <StyledLink  to="/register">
        Sign Up
      </StyledLink>
      <StyledLink  to="/login">
        Log In
      </StyledLink>
    </div>
  );
};
