import {
  useParams,
  // useMatch, it requires a Path parameter
  useNavigate,
  useLocation
} from 'react-router-dom';

// Since react-router-dom@6 does not pass anymore its props
// {params, match, navigate, location} at
// <Route path='channels/:id/edit' element={<Edit />} />
// let's implement a HOC with those props
// Source:
//
// https://stackoverflow.com/questions/72341907/mapstatetoprops-react-router-dom-v6-useparams
const withRouter = Component => props => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  return <Component
    {...props}
    {...{params, navigate, location}}
  />;
};

export default withRouter;
