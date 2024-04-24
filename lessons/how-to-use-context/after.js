const { assign, interpret, Machine } = require('xstate')

const multiColoredBulbMachine = Machine(
  {
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
          CHANGE_COLOR: {
            actions: ['changeColor'],
          },
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
  },
  {
    actions: {
      changeColor: assign((context, event) => ({ color: event.color })),
    },
  }
)
