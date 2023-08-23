import { TailSpin } from 'react-loader-spinner';
import {StyledLoader} from './Loader.styled'

export const Loader = () => {
  return (
    <StyledLoader>
      <TailSpin
        height="100"
        width="100"
        color="white"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="Name"
        visible={true}
      />
    </StyledLoader>
  );
};