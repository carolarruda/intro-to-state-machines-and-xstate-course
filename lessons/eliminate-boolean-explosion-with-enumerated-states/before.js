const { Machine, interpret } = require('xstate')

const lightBulbMachine = Machine(
  {
    id: 'lightBulb',
    initial: 'unlit',
    states: {
      lit: {
        on: {
          BREAK: 'broken',
          TOGGLE: 'unlit',
        },
      },
      unlit: {
        on: {
          BREAK: 'broken',
          TOGGLE: 'lit',
        },
      },
      broken: {
        entry: ['logBroken'],
      },
    },
  },
  {
    actions: {
      logBroken: (context, event) => {
        console.log(`yp, mrs I am broke ${event.location}`)
      },
    },
  }
)
