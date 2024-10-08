// import { Eventhandling } from './components/eventhandling'
import { EventPropagation } from './components/EventPropagation'
import { EventsProps } from './components/EventsProps'
import {States} from './components/hooks/States'
import { DerivedState}  from './components/derivedState/derivedState'
import { LiftingState } from './components/liftStateUp'
import { ToggleSwitch } from './components/projects/toggleSwitch/toggleSwitch'
import { Todo } from './components/projects/Todo/todo'
import { Counter } from './components/hooks/useState'
import { RegistrationForm } from './components/hooks/useState/registration'
import { LoginForm } from './components/hooks/useState/Login'
import { ReactUseEffect } from './components/hooks/useEffect'
import { Challenge } from './components/hooks/useEffect/effectChallenge'
import { Cleanup } from './components/hooks/useEffect/cleanUp'
import { HowNotToFetchApi } from './components/hooks/useEffect/HowNotToFetchApi'
import { UseRef } from './components/hooks/useRef'
import { ForwardRef } from './components/hooks/useRef/ForwardRef'
import { UseId } from './components/hooks/useId'
import { ParentComponent } from './components/propDrilling'
import { BioProvider } from './components/hooks/ContextApi'
import { Home } from './components/hooks/ContextApi/home'
import { DarkLight, ThemeProvider } from './components/hooks/ContextApi/DarkLight'
import { ReducerComp } from './components/hooks/useReducer'


function App() {

  return (
    <section>
      {/* <Eventhandling/> */}
      {/* <EventsProps/> */}
      {/* <EventPropagation/> */}
      {/* <States/> */}
      {/* <DerivedState/> */}
      {/* <LiftingState/> */}
      {/* <ToggleSwitch/> */}
      {/* <Todo/> */}
      {/* <Counter/> */}
      {/* <RegistrationForm/> */}
      {/* <LoginForm/> */}
      {/* <ReactUseEffect/> */}
      {/* <Challenge/> */}
      {/* <Cleanup/> */}
      {/* <HowNotToFetchApi/> */}
      {/* <UseRef/> */}
      {/* <ForwardRef/> */}
      {/* <UseId/> */}
      {/* <ParentComponent/> */}
      {/* <BioProvider>
        <Home/>
      </BioProvider> */}
      {/* <ThemeProvider>
        <DarkLight/>
      </ThemeProvider> */}
      <ReducerComp/>
    </section>
  )
}

export default App
