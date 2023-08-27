import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Input, Label, FormContainer, Button } from 'components/Form/Form.styled';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newUser = {
      name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
    }

    try {
      await dispatch(register(newUser)).unwrap();
      navigate('/');
      toast.success(`Congrats! User ${newUser.name} created`, {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error('Registration failed', {
        position: "top-center",
        autoClose: 3000,
      });
    }


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
      <ToastContainer />
    </FormContainer>
  );
};
