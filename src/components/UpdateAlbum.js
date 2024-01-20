import React from 'react'
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const UpdateAlbum = (props) => {

  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById('title-inp').value;
    let updateUserid = document.getElementById('userid-inp').value;

    if (updateTitle === '') {
      updateTitle = props.album.title;
    }
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  }

  return (
    
    <>
      <div className='containers'>
        <h2 className='text-center' style={{color:"red",'font-weight': "bolder"}}>ALBUM DETAILS</h2>
        <Form>
            <div className='Details'>
              <h5>Id - {props.album.id}</h5>
              <h5>Title - {props.album.title}</h5>
              <h5>Album Id - {props.album.userId}</h5>
            </div>
            <FormGroup>
              <Label for="title-inp">Enter New Title</Label>
              <Input
                type="text"
                id="title-inp"
              />
              <FormFeedback valid={props.album.title.length > 0}>
                {props.album.title.length > 0 ? 'Valid Title' : 'Please enter a title'}
              </FormFeedback>

              <Label for="userid-inp">Enter New Album ID</Label>
              <Input
                valid={props.album.userId.length > 0} // Example validation (modify as needed)
                type="number"
                id="userid-inp"
              />
              <FormFeedback valid={props.album.userId.length > 0}>
                {props.album.userId.length > 0 ? 'Valid Album ID' : 'Please enter an album ID'}
              </FormFeedback>
            </FormGroup>



        </Form>
        <Link to='/'><button className='btn btn-success mx-2 mt-4' type='submit' onClick={getUpdateData}>Update</button></Link>
        <Link to='/'><button className='btn btn-danger mt-4'type='submit' onClick={''}>Cancel</button></Link>
        </div>
        <div className='text-center mt-5'>
        <Link to={"/"} className='btn btn-warning'>Continue Browsing Album...</Link>
        </div>
    </>

  )
}

export default UpdateAlbum;
