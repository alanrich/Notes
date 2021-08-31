import { MdDeleteForever } from 'react-icons/md'
import { Icon } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'


// This is all UI
const Note = ({ id, date, text, handleDelete, handleEdit, handlePriority}) => {
  return(
      <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
          <small>{date}</small>
            <div className='note-icons'>
              <PriorityHighIcon
                className='priority-icon'
                color='tertiary'
                size='1.3em'/>
              <EditIcon
                className='edit-icon'
                color='tertiary'
                size='1.3em'
                onClick={()=> handleEdit(id)}/>
              <MdDeleteForever
                className='delete-icon'
                size='1.3em'
                onClick={()=>handleDelete(id)}/>
          </div>
        </div>
      </div>

  )
};

export default Note;
