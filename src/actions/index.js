export const increment = multiplier => {
  return {
    type: 'INCREMENT',
    payload: multiplier
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};
