import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Nav from './components/Nav.jsx'
import Users from './pages/Users.jsx'

function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </Router>
  </div>);
}

export default App;

// THE IMPORTS 
// import Todo from "./components/Todo.jsx";
// import Title from "./components/Title.jsx";
// import Modal from "./components/Modal.jsx";
// import Counter from "./components/Counter.jsx";
// import React, { useState, useEffect } from 'react';

// BEFORE RETURN STATEMENT
// const [showModal, setShowModal] = useState(false)

// function onTodoDelete() {
//   setShowModal(true)
// }

// function cancelModal() {
//   setShowModal(false)
// }

// function confirmModal() {
//   setShowModal(false)
// }

// useEffect(() => {
//   console.log ('ONLY on mount')
//   setShowModal(!showModal) // This is okay
// }, [])

// useEffect(() => {
//   console.log(`on mount AND on ${showModal} change`)
//   // setShowModal(!showModal) THIS CAUSES AN INFINITE LOOP
// }, [showModal])

// useEffect(() => {
//   console.log('Every render')
//   // setShowModal(!showModal) THIS CAUSES AN INFINITE LOOP
// })

// IN RETURN STATEMENT
// <div>
//   <Title />
//   <div>
//     <input type="text" onChange={ (event) => {
//       console.log(event.target.value)
//     }}/>
//     <button onClick={() => setShowModal(true)}>Add todo</button>
//   </div>
//   <div className="todo__wrapper">
//     <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
//     <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
//     <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job" />
//   </div>
//   {showModal && <Modal cancelModal={cancelModal} confirmModal={confirmModal} title="Confirm Delete"/> }
// </div>
