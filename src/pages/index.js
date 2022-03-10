import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';

const Index = ({ notes }) => {
  return(
    <div className="container">
      <h1 className='title'>List</h1>  
      <div className="card-list">
        {notes.map(note => {
          return(
            <div className='card' key={note.id}>
              <Card>
              <Card.Content>
                <Card.Header>
                  <div className="data-name">  
                  <Link href={`/${note._id}`}>
                    <a>{note.firstName} {note.lastName}</a>
                  </Link>
                  </div>
                  <p className='data-id'>{note._id}</p>
                  </Card.Header>
                  <p className='data-email'>{note.email}</p>
                  <p className='data-phone'>{note.phone}</p>
                  <p className='data-address'>{note.address}</p>
              </Card.Content>  
              <Card.Content>
                <div className="button-list">
                <Link href={`/${note._id}`}>
                  <Button primary>View</Button>
                </Link>
                <Link href={`/${note._id}/edit`}>
                  <Button secondary>Edit</Button>
                </Link>
                </div>
              </Card.Content>
              </Card>  
            </div>
          )
        })}  
      </div>
    </div>
  )
}


Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return { notes: data }
}

export default Index;