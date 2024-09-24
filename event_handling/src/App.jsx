// import { Eventhandling } from './components/eventhandling'
import { EventPropagation } from './components/EventPropagation'
import { EventsProps } from './components/EventsProps'
import {States} from './components/hooks/States'
import { DerivedState}  from './components/derivedState/derivedState'
import { LiftingState } from './components/liftStateUp'
import { ToggleSwitch } from './components/toggleSwitch/toggleSwitch'

function App() {

  return (
    <section className='container'>
      {/* <Eventhandling/> */}
      {/* <EventsProps/> */}
      {/* <EventPropagation/> */}
      {/* <States/> */}
      {/* <DerivedState/> */}
      {/* <LiftingState/> */}
      <ToggleSwitch/>
    </section>
  )
}

export default App
