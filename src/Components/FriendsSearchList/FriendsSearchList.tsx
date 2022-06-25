import React, {
  BaseSyntheticEvent,
  SyntheticEvent,
  useMemo,
  useState,
} from "react";
import { IFriendData } from "../../Models/IFriendData";
import { add, selectFriendList } from "../../redux/reducers/friendListSlice";
import { useAppDispatch, useAppSelector } from "../../redux/stateHooks";
import { randomUUID } from "../../Utils/common-utils";
import { ListCard } from "../ListCard/ListCard";
import "./FriendsSearchList.scss";

function FriendsSearchList() {
  const [textFieldValue, setTextFieldValue] = useState("");

  const friends = useAppSelector(selectFriendList);

  const allFriends = friends.fullList;

  const dispatch = useAppDispatch();

  const onTextChange = (e: BaseSyntheticEvent) => {
    setTextFieldValue(e.target.value);
  };

  const keyDown = (e: any) => {
    if (e.key == "Enter") addButtonClicked();
  };

  const addButtonClicked = () => {
    const payload: IFriendData = { id: randomUUID(), name: textFieldValue };
    dispatch(add(payload));
    setTextFieldValue("");
  };

  const hasText = !!textFieldValue.length;
  const inputClass = hasText ? "input small" : "input";

  const friendsCards = useMemo(() => {
    const orderedFriends = [
      ...allFriends?.filter((f) => !!f.favorite),
      ...allFriends?.filter((f) => !f.favorite),
    ];

    const filteredFriends = orderedFriends.filter((f) =>
      f.name.includes(textFieldValue)
    );
    return filteredFriends?.map((d) => <ListCard data={d} key={d.id} />);
  }, [textFieldValue, allFriends]);

  return (
    <div className="FriendsSearchListContainer">
      <div className="row">
        <input
          onKeyDown={keyDown}
          className={inputClass}
          placeholder="Enter friend's name"
          onChange={onTextChange}
          value={textFieldValue}
        />
        {hasText && (
          <button
            className="button fa fa-plus"
            onClick={addButtonClicked}
          ></button>
        )}
      </div>
      {friendsCards}
    </div>
  );
}
export { FriendsSearchList };
