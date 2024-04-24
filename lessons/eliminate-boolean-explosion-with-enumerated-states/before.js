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
        entry: ["logLocation", "buyANewBulB"],
      },
    },
  },
  {
    actions: {
      logLocation: (context, event) => {
        console.log(event.location)
      },
      buyANewBulB: () => {
        console.log('buy a new bulb') 
      }
    },
  }
)

const service = interpret(lightBulbMachine).start()

service.send({type: 'BREAK', location: 'office'})