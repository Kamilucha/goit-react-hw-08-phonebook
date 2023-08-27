import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Input, Label, FormContainer, Button } from 'components/Form/Form.styled';
import { useState } from 'react';


export const LoginForm = () => {
  const [loginError, setLoginError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
    })
    );

     if (form.elements.email.value !== 'correct@email.com' || form.elements.password.value !== 'correctpassword') {
      setLoginError(true); 
      return;
    }
  
      console.log(form.elements.email.value)
  };

  return (
    <FormContainer  onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Email
        <Input type="email" name="email" />
      </Label>
      <Label >
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
      {loginError && <p style={{ color: 'red' }}>Wrong login or password</p>}
    </FormContainer>
  );
};
