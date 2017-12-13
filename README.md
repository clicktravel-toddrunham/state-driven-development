## State Driven Development (SDD) in React & Redux

SDD is a development process where the application is designed and built
from the state upwards, with each domain (I.E Users, Blog Posts) being given a list of actions and states
that can be applied to it. The actions and states are defined as a first step in the development process,
hence 'State Driven Development'. By doing this you clearly document how your application works and gives each
state a clear path through the application tree.

<img src="state_tree.jpeg" width="500" height="440">

Looking at the image above you can see states have a clearly defined and contained path, which can be easily tested (as the output is
now predictable, and you know exactly what will be rendered) using snapshot testing. Paths are a series of components your data will flow down,
and should be easy to build if you have pre-defined actions and states.