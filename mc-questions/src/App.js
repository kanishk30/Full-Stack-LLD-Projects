import logo from './logo.svg';
import './App.css';
import StopWatch from './StopWatch';
import ImageCarousel from './ImageCarousel';

import useVisibility from './useVisibility';
import Modal from './Modal';

import ClassReact from './classReact';
import TodoList from './TodoList';

function App() {
  const { isVisible, show, hide, toggle } = useVisibility(false)
  return (
    <>
      <TodoList />
      {/* <ClassReact name='Scaler' />
      <StopWatch />
      <ImageCarousel />
      <button onClick={show}>Show Modal</button>
      <button onClick={toggle}>Toggle Modal</button>
      <button onClick={hide}>Hide Modal</button>
      <Modal isVisible={isVisible} show={show} hide={hide} toggle={toggle} /> */}
    </>
  );
}

export default App;
