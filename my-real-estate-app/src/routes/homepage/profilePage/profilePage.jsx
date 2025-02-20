import { useState, useEffect } from "react";
import Chat from "../../../components/chat/Chat";
import Card from "../../../components/card/Card";
import "./profilePage.scss";
import { Link } from "react-router-dom";
import {listData} from"../../../lib/properties.js"

function ProfilePage() {
  const [savedList, setSavedList] = useState([]);

  // Load saved properties from localStorage
  useEffect(() => {
    const savedProperties = JSON.parse(localStorage.getItem("favourites")) || [];
    console.log("Saved Properties:", savedProperties);
    
    setSavedList(savedProperties);
  }, []);

  const handleRemove = (propertyId) => {
    const updatedList = savedList.filter((item) => item.id !== propertyId);
    setSavedList(updatedList);
    localStorage.setItem("favourites", JSON.stringify(updatedList));
  };

  const handleClearAll = () => {
    setSavedList([]);
    localStorage.removeItem("favourites");
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          {/* User Information */}
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-512.png"
                alt=""
              />
            </span>
            <span>
              Username: <b>Saiganeshwaran</b>
            </span>
            <span>
              E-mail: <b>saiganeshwaran@gmail.com</b>
            </span>
          </div>

          <div className="title">
            <h1>Saved List</h1>
            <button onClick={handleClearAll}>Clear All</button>
          </div>
          <div className="savedProperties">
            {savedList.length > 0 ? (
              savedList.map((property) => (
                <Card
                  key={property.id}
                  item={property}
                  onRemove={handleRemove} // Pass remove handler to the card
                />
              ))
            ) : (
              <p>No saved properties available.</p>
            )}
          </div>

          {/* My List */}
          <div className="title">
            <h1> List</h1>
            <Link to="/newpost">
              <button>Create New Post</button>
            </Link>
          </div>
          <div className='list'>
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
          
          

          {/* Saved List */}
       
        </div>
      </div>
      {/* Chat Section */}
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
