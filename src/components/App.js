import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Edit from "./Edit";
import Home from "./Home";
import About from "./About";
import {Routes, Route} from "react-router-dom";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]); //empty array
  const [edit, setEdit] = useState(false); //for a note to be edited...
  const [noteId, setNoteId] = useState("");
  
  // const [noteToEdit, setNoteToEdit] = useState({}); //note to edit...

  function handleClick(aNote) {
    setNotes((prevNotes) => {
      //effectively pushes new note into notes array..
      return [...prevNotes, aNote];
    });
  }

  const renderNotes = (someNote, someNoteIndex) => (
    <Note
      key={someNoteIndex} //used by react
      id={someNoteIndex} //to be used in the Note component
      title={someNote.title}
      content={someNote.content}
      onDelete={deleteNote}
      onEdit={editNote}
    />
  );

  function deleteNote(noteId) {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, noteindex) => noteId !== noteindex)
    );
  }

  function editNote(someNoteId){
    setNoteId(someNoteId)
    setEdit(true);
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <CreateArea onRender={handleClick} />
      {/* hidden edit box */}
      <Edit notes={notes} noteId={noteId}  setEdit={setEdit} setNotes={setNotes} mode={edit} />
      {/* render all notes here */}
      {notes.map(renderNotes)}
      <Footer />
    </div>
  );
}

export default App;

