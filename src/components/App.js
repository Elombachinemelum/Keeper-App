import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]); //empty array

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
    />
  );

  function deleteNote(noteId) {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, noteindex) => noteId !== noteindex)
    );
  }
  return (
    <div>
      <Header />
      <CreateArea onRender={handleClick} />
      {notes.map(renderNotes)}
      <Footer />
    </div>
  );
}

export default App;

