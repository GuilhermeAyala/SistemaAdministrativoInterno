import ComponenteTeste from '../ComponentesAdm/hello'

export const SomeResource = {
  //resource: postgresql, // database model
  options: {
    properties: {
      someText: {
        type: 'string',
        components: {
          edit: ComponenteTeste, // this is our custom component
        },
      },
    },
  },
}