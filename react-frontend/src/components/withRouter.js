import { useNavigate, useParams } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    return (
      <Component navigate={navigate}
        params = {id}
      {...props}
      />
    );
  };
  
  return Wrapper;
};