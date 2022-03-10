import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';

const Note = ({ note }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDelete) {
            deleteData();
        }
    }, [isDelete]);

    const open = () => setConfirm(true);
    
    const close = () => setConfirm(false);
    
    const deleteData = async () => {
        const dataId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/notes/${dataId}`, {
                method: "DELETE"
            })
            router.push('/')
        } catch (error) {
            console.log('error :', error)
        }
    }

    const handleDelete = async () => {
        setIsDelete(true);
        close();
    }

    return(
        <div className='note-container'>
            {isDelete 
            ? <Loader active />
            :
            <div className='detail-container'>
                <p className="detail-data-id">
                {note._id}    
                </p>
                <p>{note.phone}</p>
                <p>{note.email}</p>
                <p>{note.address}</p>
                <div className="button">
                <Button onClick={open} color="red">Delete</Button>
                </div>
            </div>
        }
        <Confirm 
            open={confirm}
            onCancel={close}
            onConfirm={handleDelete}
        />
        </div>
    )
}

Note.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);

    const { data } = await res.json();

    return { note: data };
}

export default Note;