## State Driven Development in React & Redux

State Driven Development is a development process where the application is designed and built
from the state upwards.

The possible states and actions a component could have are pre-defined in the global store (Redux),
a container component is then built to reflect these states in a simple switch statement. This keeps
your container components clean and means they are driven by the state in Redux.

Testing these components is simple, you just need a snapshot test per state.