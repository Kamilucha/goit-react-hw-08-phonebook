import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Input, Label, FormContainer, Button } from 'components/Form/Form.styled';


export const LoginForm = () => {
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
  
      console.log(form.elements.email.value)
    form.reset();
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
    </FormContainer>
  );
};
