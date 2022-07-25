import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetings/greetings';

function Greeting() {
  const message = useSelector((state) => state.greetingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <div>
      <div>Greeting: </div>
      <div>{message.message}</div>
    </div>
  );
}

export default Greeting;
