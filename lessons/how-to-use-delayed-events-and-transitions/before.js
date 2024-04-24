const { Machine } = require("xstate");

const stopLightMachine = Machine(
  {
    id: "stopLight",
    initial: "red",
    states: {
      red: {
        after: { RED_TIMER: "yellow" },
      },
      yellow: {
        after: { YELLOW_TIMER: "green" },
      },
      green: {
        after: { GREEN_TIMER: "red" },
      },
    },
  },
  {
    delays: {
      GREEN_TIMER: 4000,
      YELLOW_TIMER: 1000,
      RED_TIMER: 3000,
    },
  }
);
