const counter = {
  state: {
    count: 0
  },
  mutations: {
    updateCount(state) {
      state.count += 1;
    }
  },
  actions: {}
};

export default counter;
