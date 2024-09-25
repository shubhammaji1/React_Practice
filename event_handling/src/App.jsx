// import { Eventhandling } from './components/eventhandling'
import { EventPropagation } from './components/EventPropagation'
import { EventsProps } from './components/EventsProps'
import {States} from './components/hooks/States'
import { DerivedState}  from './components/derivedState/derivedState'
import { LiftingState } from './components/liftStateUp'
import { ToggleSwitch } from './components/projects/toggleSwitch/toggleSwitch'
import { Todo } from './components/projects/Todo/todo'

function App() {

  return (
    <section className='container'>
      {/* <Eventhandling/> */}
      {/* <EventsProps/> */}
      {/* <EventPropagation/> */}
      {/* <States/> */}
      {/* <DerivedState/> */}
      {/* <LiftingState/> */}
      {/* <ToggleSwitch/> */}
      <Todo/>
    </section>
  )
}

export default App
