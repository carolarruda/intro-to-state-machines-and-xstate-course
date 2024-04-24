const { assign, interpret, Machine } = require('xstate')

const multiColoredBulbMachine = Machine({
  id: 'multiColoredBulb',
  initial: 'unlit',
  context: {
    color: '#fff',
  },
  states: {
    lit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'unlit',
        CHANGE_COLOR: assign({ color: (context, event) => event.color }),
      },
    },
    unlit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'lit',
      },
    },
    broken: { type: 'final' },
  },
})
