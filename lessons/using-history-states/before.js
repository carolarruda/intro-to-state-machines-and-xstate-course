const { Machine } = require("xstate");

const spaceHeaterMachine = Machine({
  id: "spaceHeater",
  initial: "poweredOff",
  states: {
    poweredOff: {
      on: { TOGGLE_POWER: "poweredOn.hist" },
    },
    poweredOn: {
      on: { TOGGLE_POWER: "poweredOff" },
      type: "parallel",
      states: {
        heated: {
          initial: "lowHeat",
          states: {
            lowHeat: {
              on: { TOGGLE_HEAT: "highHeat" },
            },
            highHeat: {
              on: { TOGGLE_HEAT: "lowHeat" },
            },
          },
        },
        oscillation: {
          initial: "disabled",
          states: {
            enabled: {
              on: { TOGGLE_OSC: "disabled" },
            },
            disabled: {
              on: { TOGGLE_OSC: "enabled" },
            },
          },
        },
        hist: {
          type: "history",
          history: "deep",
        },
      },
    },
  },
});
import { createMachine } from "xstate";