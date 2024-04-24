const { Machine } = require('xstate')

const echoCallbackHandler = (context, event) => (callback, onEvent) => {
  onEvent((e) => {
    if (e.type === 'HEAR') {
      callback('ECHO')
    }
  })
}

const echoMachine = Machine({
  id: 'echo',
  initial: 'listening',
  states: {
    listening: {
      invoke: {
        id: 'echoCallBack',
        src: echoCallbackHandler,
      },
      on: {
        SPEAK: {
          actions: send('FOO', {
            to: 'echoCallBack',
          }),
        },
        ECHO: {
          actions: () => {
            console.log('echo, echo')
          },
        },
      },
    },
  },
})
