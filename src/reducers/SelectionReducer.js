export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload; //returning the ID

    default:
      return state;
  }
  /*console.log(action);
  return null;*/
};
