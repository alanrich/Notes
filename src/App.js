import NotesList from './NotesList'
import Search from './Search'
import Header from './Header'
import { useState, useEffect } from 'react'

const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const [noteEditing, setNoteEditing] =useState(null);
  const [editingText, setEditingText] = useState('');
  const [notes, setNotes] = useState([
    {
      id:Date.now(),
      date:new Date().toLocaleDateString(),
      text:'This is a sample note, use the green card to make editable, deleteable, searchable notes that will persist in your browser',
    }
  ]);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);
		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = (text) => {
      const date = new Date();
      const newNote = {
        id: Date.now(),
        date: date.toLocaleDateString(),
        text:text,
      };
      console.log('newNote =' + newNote)
      const newNotes = [...notes, newNote];
      console.log("newnotes = " + newNotes)
      setNotes(newNotes);
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => (note.id !== id));
    setNotes(newNotes);
  }

  const editNote = ((id) => {
    setNoteEditing(id);
  });

  const editingTextHandler = (text) => {
    setEditingText(text);
  }

  // assign the edited value to the task with matching id.
  // except the one the method modifies
  const saveEdit = (id) => {
    const newNotes = [...notes].map((note) => {
      if(note.id === id){
         note.text = editingText;
      };
      return note;
    });
    setNotes(newNotes);
    setNoteEditing(null);
    setEditingText("");
  }


  return (
    <div className={darkMode && 'dark-mode'}>
      <div className='container'>
        <Header
          darkMode={darkMode}
          darkModeHandler={setDarkMode}/>
        <Search setSearchText={setSearch} searchText={search}/>
        <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(search)) }
            handleSubmitProp={addNote}
            handleDelete={deleteNote}
            handleEdit={editNote}
            saveEdit={saveEdit}
            noteEditing={noteEditing}
            editingText={editingText}
            editingTextHandler={editingTextHandler}/>
      </div>
    </div>
  );
}

export default App;
