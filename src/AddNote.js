import { useState } from 'react'

const AddNote = ({ handleSubmitProp }) => {
  const [noteText, setNoteText] = useState('');
  var charLimit = 200;

  const handleChange = (e) => {
    if(noteText.length < charLimit){
      setNoteText(e.target.value)
    };
  }

  const handleSubmit = () => {
    if(noteText.trim().length > 0){
      handleSubmitProp(noteText)
    };
    setNoteText('');
  }

  return(
    <div className='note new'>
      <textarea
        cols="10"
        rows="8"
        placeholder="type to add a note"
        onChange={handleChange}
        value={noteText}>
      </textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} characters remaining</small>
        <button className='save'onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
