import Vue from 'vue';
const counter = {
  state: {
    count: 0
  },
  mutations: {
    updateCount() {
        state.count += 1;
    }
  },
  actions: {}
};

export default counter;
