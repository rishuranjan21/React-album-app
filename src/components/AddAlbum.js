import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const AddAlbum = (props) => {

  //this function get all the input like userid and title then call add albumm function for add it on the album list
  const getAlbumFormData = () => {
    const userId = document.getElementById('input1').value;
    const title = document.getElementById('input2').value;
    props.addAlbumToList(Number(userId), title)
  }

  return (
    <>
      {/* navbar */}
      <Navbar path="/" page="Home" />


      {/* <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h4>Enter New Album Details</h4>
          <div className='inp-container'>
            <h6>Enter User Id :</h6>
          <input id='aaform-userid-inp' type="number" />
          </div>
          <div className='inp-container'>
            Enter Album Title :
            <input id='aaform-title-inp' type="text" />
          </div>
          <div>
            <Link to="/"><button className="btn btn-success" onClick={getAlbumFormData}>Add To List</button></Link>
          </div>
        </div>
      </div> */}

      <div class="container mt-4">
  <form>
    
    <div class="mb-3">
    <h4 className='mb-3 mt-2'>Enter New Album Details</h4>
      <label for="input1" class="form-label">
      Enter New Album Id
      </label>
      <input type="number" class="form-control" id="input1" name="input1"/>
    </div>

    <div class="mb-3">
      <label for="input2" class="form-label">
      Enter New Album Title :
      </label>
      <input type="text" class="form-control" id="input2" name="input2"/>
    </div>

    <Link to="/"><button type="submit" className="btn btn-primary mx-2 my-3" onClick={getAlbumFormData}>Submit</button></Link>
    <Link to="/"><button type="button" className="btn btn-secondary" onclick="resetForm()">Cancel</button></Link>
  </form>
  </div>
    </>
  )
}

export default AddAlbum

