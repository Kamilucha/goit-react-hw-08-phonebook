import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Input, Label, FormContainer, Button } from 'components/Form/Form.styled';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer  onSubmit={handleSubmit} >
      <Label >
        Username
        <Input type="text" name="name" autoComplete="new-name" />
      </Label>
      <Label >
        Email
        <Input type="email" name="email" autoComplete="new-email" />
      </Label>
      <Label >
        Password
        <Input type="password" name="password" autoComplete="new-password" />
      </Label>
      <Button type="submit">Sign Up</Button>
    </FormContainer>
  );
};
