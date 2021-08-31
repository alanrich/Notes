import { useState } from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({  editingText, editingTextHandler, notes, handleSubmitProp, handleDelete, handleEdit, saveEdit, noteEditing }) => {
  
  // start with an empty Noteslist
  const [noteText, setNoteText] = useState('');
  var charLimit = 200;
  
  //render the array of notes using map method
  return(
    <div className='notes-list'>
      {notes.map((note) =>  note.id === noteEditing ?
        <div className='note yellow'>
          <textarea
            cols="10"
            rows="8"
            placeholder="type to edit note"
            value={editingText}
            onChange={((e)=> {
              editingTextHandler(e.target.value);
              setNoteText(e.target.value);
            })}
            >
          </textarea>
          <div className="note-footer">
            <small>{charLimit - noteText.length} characters remaining</small>
            <button
              className='save'
              onClick={(() => saveEdit(note.id))}>
              Save
            </button>
          </div>
        </div>
        :

      <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDelete={handleDelete}
          handleEdit={handleEdit} />
      )}

      <AddNote handleSubmitProp={handleSubmitProp} />
    </div>
  );
};

export default NotesList;
