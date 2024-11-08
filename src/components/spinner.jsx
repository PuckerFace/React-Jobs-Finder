import { PacmanLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <PacmanLoader
      color="yellow"
      loading={loading}
      cssOverride={override}
      size={80}
    />
  );
};

export default Spinner;
