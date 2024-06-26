const { Machine, send } = require('xstate')
const echoMachine = Machine({
  id: 'echo',
  initial: 'listening',
  states: {
    listening: {
      on: {
        SPEAK: { actions: send({ type: 'ECHO' }) },
        ECHO: {
          actions: () => {
            console.log('echo, echo')
          },
        },
      },
    },
  },
})
