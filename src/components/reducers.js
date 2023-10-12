const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        console.log('Hiii')
        console.log(state.data)
        return { data: state.data };
      default:
        throw new Error('Unknown action type');
    }
  };
  
  export default reducer;