const counter = {
  state: {
    count: 10
  },
  mutations: {
    updateCount(state) {
      state.count += 1;
    }
  },
  actions: {}
};

export default counter;
