import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserContainer, UserName, LogOut } from './UserMenu.styled';

// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserContainer >
      <UserName>Welcome, {user.name}</UserName>
      <LogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOut>
    </UserContainer>
  );
};
