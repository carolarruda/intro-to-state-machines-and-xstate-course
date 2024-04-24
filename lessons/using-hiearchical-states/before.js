const { Machine } = require('xstate')

const doorMachine = Machine({
  id: 'door',
  initial: 'locked',
  states: {
    locked: {},
    unlocked: {
      initial: 'closed',
      states: {
        closed: {},
        opened: {},
      },
    },
  },
})
