// import { Eventhandling } from './components/eventhandling'
import { EventPropagation } from './components/EventPropagation'
import { EventsProps } from './components/EventsProps'
import {States} from './components/hooks/States'
import { DerivedState}  from './components/derivedState/derivedState'

function App() {

  return (
    <section className='container'>
      {/* <Eventhandling/> */}
      {/* <EventsProps/> */}
      {/* <EventPropagation/> */}
      {/* <States/> */}
      <DerivedState/>
    </section>
  )
}

export default App
