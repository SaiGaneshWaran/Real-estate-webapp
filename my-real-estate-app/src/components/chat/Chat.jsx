import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt=""
          />
          <span>James Sterling</span>
          <p>Is the semi-detached house near Petts Wood station still available for $750,000?</p>
        </div>
        <div className="message">
          <img
            src="https://media.gettyimages.com/id/1227618801/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=1024x1024&w=gi&k=20&c=jmyg6H4d9kkHPr4cA-w2ZYwcD9Hw2QXe61I-bYOEXgk="
            alt=""
          />
          <span>Alexan Chaseer</span>
          <p>Does the two-bedroom garden flat on Crofton Road include parking space?</p>
        </div>
        <div className="message">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRtVUUri8HtCy5nw5zagk0mORW5uufMS-xg&s"
            alt=""
          />
          <span>Benjamin Gray</span>
          <p>Can I arrange a viewing for the four-bedroom bungalow on Meadow Lane, Bromley?</p>
        </div>
        <div className="message">
          <img
            src="https://img.freepik.com/premium-vector/cute-smiling-adult-man-suit-glasses-flat-style-vector-illustration_710508-2329.jpg"
            alt=""
          />
          <span>Sebastian Wilde</span>
          <p>What amenities are included in the studio apartment on High Street for $220,000?</p>
        </div>
        <div className="message">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiIQQWroPeiSyTrPWVWYHGrXXTdkEZ86ShcOgQn_XXNybck9YtbrZ9JcUrFpTOs3kHPk&usqp=CAU"
            alt=""
          />
          <span>Christopher Fox</span>
          <p>Are there additional photos of the luxury five-bedroom house on Oakwood Avenue, Beckenham?</p>
        </div>
        <div className="message">
          <img
            src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
            alt=""
          />
          <span>William Archer</span>
          <p>Does the three-bedroom flat with river views on Riverside Drive, Greenwich come fully furnished?</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://img.freepik.com/premium-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg?semt=ais_hybrid"
                alt=""
              />
              Michael Johnson
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Can you tell me more about the house on Petts Wood Road?</p>
              <span>4 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>This property includes 3 bedrooms, 2 bathrooms, and a spacious backyard. It’s located in a quiet neighborhood near Petts Wood Road. Would you like me to send you a brochure or schedule a tour?</p>
              <span>3 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Can we schedule a visit to the property?</p>
              <span>3 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>I have availability for property visits this week on Tuesday at 4 PM or Thursday at 11 AM. Which slot works best for you?</p>
              <span>3 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Can you tell me about financing options for this property?</p>
              <span>3 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>We have a financing partner who offers mortgage options for as low as 3% interest. Would you like me to connect you with them? If you are interested in purchasing, we can also discuss down payment plans tailored to your needs.</p>
              <span>2 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>I will check with my family and get back to you.</p>
              <span>2 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Hi  Michael Johnson, just following up to check if you’re interested in scheduling a visit to the property on Petts Wood Road. Let me know if you’d like to proceed or if you have any questions!</p>
              <span>2 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>I visited the property today. I’m still thinking about it.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Thanks for visiting the property today! Let me know if you have any questions or if you had like to make an offer. If you are considering this property, we can also assist with next steps like negotiating the price or arranging financing</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;