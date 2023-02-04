import './App.css'
import { FourthForm } from './components/fourth-form/fourth-form';
import { FifthForm } from './components/fifth-form/fifth-form';
import { FirstForm } from './components/first-form/first-form';
import { SecondForm } from './components/second-form/second-form';
import { TaskOne } from './components/task1/task1';
import { TaskTwo } from './components/task2/task2';
import { TaskThree } from './components/task3/task3';
import { ThirdForm } from './components/third-form/third-form';

function App() {

  return (
    <div className="App">

      <section className='task second-task'>
        <FirstForm />
      </section>
        
      <section className='task second-task'>
        <SecondForm />
      </section>

      <section className='task second-task'>
        <ThirdForm />
      </section>

      <section className='task fourth-task'>
        <FourthForm />
      </section>

      <section className='task fifth-task'>
        <FifthForm />
      </section>
      
      <section className='task taskOne'>
        <TaskOne />
      </section>

      <section className='task taskOne'>
        <TaskTwo />
      </section>

      <section className='task taskOne'>
        <TaskThree />
      </section>

    </div>
  )
}

export default App
