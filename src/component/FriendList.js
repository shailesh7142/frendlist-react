import React, { useState} from "react";
import "./styles.css";
import FriendName from "./FriendName";
import Pagination from "./Pagination";
// import { useDispatch } from 'react-redux';
// import { friendReducerSlice } from '../reducerSlice';

const FriendList= (props)=> {
  const [friendList, setFriendList] = useState([]);
  const [name, setName] = useState("");
  const [pageData, setPageData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
//   const dispatch = useDispatch();

  const setPaginationData = (data) => {
    setPageData(data);
  };

  function onSearch(event) {
    const filtered = friendList.filter((friend) =>
      friend.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchValue(event.target.value);
    setSearchResults(filtered);
  }

  //capitalize 1st letter of name
  const capitalize = (name) => {
    let splitted = name.split(" ");
    splitted = splitted.map(
      (str) => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
    );
    return splitted.join(" ");
  };


  //delete friend
  function handleDelete(id) {
    const updatedList = friendList.filter((friend) => friend.id !== id);
    setFriendList(updatedList);
  }

  //fav friend
  function handleFavorite(id) {
    console.log(".....",id)
    const updatedList = friendList.map((friend) => {
      if (friend.id === id) {
        return {
          ...friend,
          isFavorite: !friend.isFavorite
        };
      } else return friend;
    });
    setFriendList(updatedList);
  }

  function handleSubmit() {
   
      console.log("....",name)
    const friend = {
      id: friendList.length,
      name: capitalize(name),
      isFavorite: false
    };
    const updatedList = [...friendList, friend];
    console.log("....",updatedList)
   setFriendList(updatedList);
    // dispatch(friendReducerSlice(friendList))
    setName("");
  }

  function handleSort() {
    let sortedList = [...friendList];
    sortedList.sort((a, b) => {
      console.log("sort....",a,b)
      if (a.isFavorite && !b.isFavorite) {
        return -1;
      } else if (!a.isFavorite && b.isFavorite) {
        return 1;
      }
      return a.name.localeCompare(b.name);
    });
    setFriendList(sortedList);
  }

  return (
    <div className="wrapper">
      <div className="input-container">
        <input
          placeholder="Search Friend"
          type="text"
          value={searchValue}
          onChange={onSearch}
        />
      </div>
      <div className="info-wrapper">
        <div className="friendlist-container">
          <header>
            <h4>Friends List</h4>
            <button className="button-sort" onClick={handleSort}>
              Sort
            </button>
          </header>
          {/* <form onSubmit={handleSubmit}> */}
            <input
              className="add-input"
              placeholder="Enter your Friend's name"
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
            <button onClick={handleSubmit}>
                Add
            </button>
          {/* </form> */}
        </div>

        {searchValue === ""
          ? pageData.map((friend) => (
              <FriendName
                key={friend.id}
                friend={friend}
                handleFavorite={handleFavorite}
                handleDelete={handleDelete}
              />
            ))
          : searchResults.map((friend) => (
              <FriendName
                key={friend.id}
                friend={friend}
                handleFavorite={handleFavorite}
                handleDelete={handleDelete}
              />
            ))}
      </div>

      <div>
        {friendList.length >= 1 ? (
          <Pagination
            updateList={setPaginationData}
            list={searchValue ? searchResults : friendList}
          />
        ) : (
          <h4>Add Friends to display</h4>
        )}
      </div>
    </div>
  );
}

export default FriendList;
