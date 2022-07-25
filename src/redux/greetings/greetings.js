const initialState = [];

const FETCH_GREETING = 'FETCH_GREETING';
const START_LOADING = 'START_LOADING';
const END_LOADING = 'END_LOADING';

export const getGreeting = () => async (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
  const response = await fetch('http://127.0.0.1:3000/greeting');
  const responseJSON = await response.json();
  dispatch({
    type: FETCH_GREETING,
    data: responseJSON.greeting,
  });
  dispatch({
    type: END_LOADING,
  });
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case FETCH_GREETING:
      return {
        ...state,
        message: action.data,
      };
    default:
      return state;
  }
};

export default greetingReducer;
