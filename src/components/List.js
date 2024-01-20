import React from 'react'
import { Link } from "react-router-dom";
import { MdLibraryMusic } from "react-icons/md";

//get album from album list and show using html css and js
const List = (props) => {

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC"
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1"
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1"
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1"
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD"
    }
  ]

  return (
    <div className='card-containe mt-2 mb-2'>
    <div className='card-wrapper mx-3 my-3'>
      <div className='card-top' style={{ "background-color": colors[props.album.id % 5].primaryColor }}></div>
      <div className = "task-holder">
      <span className="card-header" style={{ "background-color": colors[props.album.id % 5].secondaryColor, "border-radius": "10px" }}>{props.album.id}</span>
      <span className="card-header" style={{ "background-color": colors[props.album.id % 5].secondaryColor, "border-radius": "10px" }}>{props.album.userId} <MdLibraryMusic /></span>
      <p className="text-center mt-3">{props.album.title}</p>
      <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
      <Link to="/update-album"> <i class="far fa-edit mx-4" style={{ "color": colors[props.album.id % 5].primaryColor, "cursor": "pointer" }} onClick={() => props.setUpdateAlbum(props.album)}></i> </Link>
        {/* <Link to="/update-album"><button className="update-btn" onClick={() => props.setUpdateAlbum(props.album)}>Update</button></Link> */}
        <i class="fas fa-trash-alt" style={{ "color": colors[props.album.id % 5].primaryColor, "cursor": "pointer" }} onClick={() => props.deleteAlbumFromList(props.album.id)}></i>
        {/* <button className='delete-btn' onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</button> */}

      </div>
      </div>
    </div>
    </div>
  )
}

export default List
