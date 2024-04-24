// after.js
const { assign, Machine } = require("xstate");

const tryTryAgainMachine = Machine(
  {
    id: "tryTryAgain",
    initial: "idle",
    context: {
      tries: 0,
    },
    states: {
      idle: {
        on: { TRY: "trying" },
      },
      trying: {
        entry: ["incTries"],
        on: {
          "": [{ target: "success", cond: "triedEnough" }, { target: "idle" }],
        },
      },
      success: {},
    },
  },
  {
    actions: {
      incTries: assign({
        tries: (context) => context.tries + 1,
      }),
    },
    guards: {
      triedEnough: (context) => context.tries >= 2,
    },
  }
);
import { createMachine } from "xstate";
