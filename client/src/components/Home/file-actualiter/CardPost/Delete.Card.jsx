import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../../actions/post.action";

const DeleteCard = ({ post }) => {
  const dispatch = useDispatch();

  const deleteItem = (e) => {
    dispatch(deletePost(post));
  };


  return ( 
    <>
      <i
        role="tab"
        aria-selected="false"
        aria-controls="panel-2"
        id="tab-2"
        tabIndex="0"
        className="fa fa-trash"
        onClick={() => {
          if (window.confirm("Voulez-vous supprimer ce post?")) {
            deleteItem();
          }
        }}
        
      ></i>
    </>
  );
};

export default DeleteCard;
