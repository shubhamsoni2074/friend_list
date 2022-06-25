import React from "react";
import { useDispatch } from "react-redux";
import { IFriendData } from "../../Models/IFriendData";
import { favorite, remove } from "../../redux/reducers/friendListSlice";
import "./ListCard.scss";

type ListCardPropsType = {
  data: IFriendData;
};

function ListCard(props: ListCardPropsType) {
  const { data } = props;

  const dispatch = useDispatch();

  const starClicked = () => {
    console.log("asdsada");

    dispatch(favorite(data.id));
  };

  const deleteClicked = () => {
    dispatch(remove(data.id));
  };

  const starClass = data.favorite
    ? "icon fa fa-star starred"
    : "icon fa fa-star";
  return (
    <div className="ListCardContainer">
      <div className="row">
        <p className="text">{data.name}</p>
        <div className={starClass} onClick={starClicked}></div>

        <div
          className="icon fa fa-trash"
          style={{ color: "red" }}
          onClick={deleteClicked}
        ></div>
      </div>
    </div>
  );
}
export { ListCard };
