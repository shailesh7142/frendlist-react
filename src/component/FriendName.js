import React, { useState } from "react";
import DeleteItemFromList from "./DeleteItemFromList";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from "@mui/material";


const FriendName=(props)=> {
  const [show, setShow] = useState(false);
  console.log("props.friend.isFavorite ",props.friend.isFavorite  )

  return (
    <div className="container">
      <div className="info">
        <h4 className="title">{props.friend.name}</h4>
      </div>
      <div className="button-container">
        <Button
          className="favorite-button"
          onClick={() => props.handleFavorite(props.friend.id)}
        >
          {props.friend.isFavorite ? (
           <FavoriteIcon></FavoriteIcon>
          ) : (
           <FavoriteBorderIcon/>
          )}
        </Button>
        <DeleteIcon
          className="delete-button"
          //  onClick={() => props.handleDelete(props.friend.id)}
          onClick={() => setShow(true)}
        >
          {<i className="ri-delete-bin-line">Delete</i>}
        </DeleteIcon>
        <DeleteItemFromList
          show={show}
          onClose={() => setShow(false)}
          friend={props.friend}
          handleDelete={props.handleDelete}
        />
      </div>
    </div>
  );
}

export default React.memo(FriendName);
