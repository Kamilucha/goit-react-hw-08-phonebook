import { useNavigate } from 'react-router-dom';
import { getToken } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Button } from 'components/Form/Form.styled';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'white',
  },
};

export default function Home() {
  const isAuth = useSelector(getToken);
  const navigate = useNavigate();

   const handleStart = () => {
    isAuth ? navigate('/contacts') : navigate('/login');
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
         {!isAuth ? 'Get started' : 'Get your contacts'}
      </h1>
         <Button
          type="button"
          onClick={handleStart}
        >Start</Button>
    </div>
  );
}
