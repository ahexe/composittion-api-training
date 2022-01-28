import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    firstName: "",
    lastName: "",
    age: 0,
    agePlaceholder: null,
    theCounter: 0,
  }),
  getters: {
    fullName: (state) => state.firstName + " " + state.lastName,
  },
  actions: {
    counterPlusOne() {
      this.theCounter++;
    },
    setAge(value: any) {
      if (value > 0 && value <= 150) {
        this.age = value;
      } else {
        this.age = 0;
        this.agePlaceholder = null;
      }
    },
  },
});
