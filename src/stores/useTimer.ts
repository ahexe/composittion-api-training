import { defineStore } from "pinia";

export const useTimer = defineStore("timer", {
  state: () => ({
    seconds: 0,
    minutes: 0,
    hours: 0,
  }),
  actions: {
    setTimer() {
      this.seconds++;
      if (this.seconds === 60) {
        this.minutes++;
        this.seconds = 0;
        if (this.minutes === 60) {
          this.hours++;
          this.minutes = 0;
        }
      }
    },
  },
  getters: {
    showTimer(): string {
      return this.hours + ":" + this.minutes + ":" + this.seconds;
    },
    coolTimer(): string {
      let sec = String(this.seconds);
      let min = String(this.minutes);
      let hr = String(this.hours);
      if (this.seconds < 10) {
        sec = "0" + this.seconds;
      }
      if (this.minutes < 10) {
        min = "0" + this.minutes;
      }
      if (this.hours < 10) {
        hr = "0" + this.hours;
      }
      return hr + ":" + min + ":" + sec;
    },
  },
});
