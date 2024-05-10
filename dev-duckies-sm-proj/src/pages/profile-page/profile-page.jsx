import React, { useState, useEffect } from 'react';
import Post from "./post.jsx"

export default function ProfilePage() {
  //bellow is the state for my editable bio 
  const [isEditing, setIsEditing] = useState(false); // State to track if editing mode is active
  const [bio, setBio] = useState("I make movies");

//Bellow is the state for my username
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [user, setUser] = useState("Username");

//On page load get check local storage for key 'bio'. If bio is not any empty string get bio. 
  useEffect(() => {
    const storedBio = localStorage.getItem('bio');
    if (storedBio) {
      setBio(storedBio);
    } }, []);
//If "username" exists in local storage, get it and set the setUser to its value.
//else set b
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUser(storedUsername);
    } else {
      setUser("Username"); // Default Username if none is provided
    }
  }, []);
  

//controls state for editing username 
const handleUsernameClick =() => {
  setIsEditingUser(true)
}

//Changes the value of username
const handleUsernameChange = (event)=>{
  setUser(event.target.value)
}

//Upon submitting username it is saved to local storage and IsEditingUser is set to false.
const handleUserSubmit= (event)=>{
  event.preventDefault();
  localStorage.setItem('username',user )
  setIsEditingUser(false)
}

//Controls the state for editing Bio
  const handleBioClick = () => {
    setIsEditing(true); // Activate editing mode when the bio is clicked
  };
//Changes the value of username
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };
//Upon submitting Bio it is saved to local storage and IsEditingUser is set to false.
  const handleBioSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('bio',bio)
    setIsEditing(false);
    alert('Bio saved!') // Deactivate editing mode when the form is submitted
    // Add logic here to save the updated bio to the backend
    //Save the bio in local storage
  };

//when the page loads I want the picture URL saved in local storage to be retirved so that last saved image
    //is display in the proile image on page load
  const handleProfilePicChange = () => {
    
    const storedProfilePic = localStorage.getItem("profilePic");
    if (storedProfilePic) {
      // Set the profile picture source
      const profilePic = document.getElementById("profile-pic");
      profilePic.src = JSON.parse(storedProfilePic);
    }
  }
  
//for the bellow to work I need to know how to get and set objects in local storage
useEffect(() => {
  handleProfilePicChange();

  // Set up onchange event for the input file element
  let inputFile = document.getElementById("input-file");
  if (inputFile) {
    inputFile.onchange = function() {
      const profilePic = document.getElementById("profile-pic");
      profilePic.src = URL.createObjectURL(inputFile.files[0]);

      // Save the profile picture URL to local storage
      localStorage.setItem("profilePic", JSON.stringify(profilePic.src));

      alert("Profile Picture Saved");
    };
  }
}, []); // Empty dependency array ensures the effect runs only once after mounting

  return (
    <>
      <div className="card m-2">
        {/* Navbar and user profile */}
        <div className="card">
          <header className="card-header is-flex-direction-column is-align-items-center p-4">
            <figure className="image is-128x128 is-square mr-5 ml-3" style={{ objectFit: 'cover', width: '128px', height: '128px' }}>

              <img 
              id= "profile-pic" 
              className="is-rounded" 
              src="./default-profile.png"
               alt="Prof" />
               
            </figure>

          <div className= "file is-small is-primary">
            <label className="file-label"htmlFor="input-file">
            <input className="file-input" id= "input-file" type="file" accept="image/jpeg, image/png, image/jpg"/>
            <span className="file-cta">
              <span className="file-icon">
              <i className="fas fa-upload"></i>
             </span>
            <span className="file-label">Change profile photo… </span>
    </span>
            </label>

            
          </div>

            


            {/* Conditional rendering based on editing mode */}
            {/*If isEditingUser is true, user is an input field */}

          {
            isEditingUser ? (
              <form onSubmit= {handleUserSubmit}>
                  <input
                    value={user}
                    onChange= {handleUsernameChange}
                    rows={1}
                    cols={1}
                  />/
                  <button type="submit">Save</button>
              </form>
            ): <h1 className="is-size-2" onClick={handleUsernameClick}>{user}</h1>
          }


            {isEditing ? (
              <form onSubmit={handleBioSubmit}>
                <textarea
                className= "bio-textarea"
                  value={bio}
                  onChange={handleBioChange}
                  rows={4}
                  cols={50}
                  style={{ textAlign: 'center'}} // Center-align text
                />
                <button type="submit">Save</button>
              </form>)
             : bio ? (
              <div style={{maxWidth: "400px"}} className="container mx-6 is-flex is-flex-wrap is-justify-content-center">
              <p className="bio has-text-centered"onClick={handleBioClick}>{bio}</p>
              </div>
            ) : (
              <p style={{color:"gray"}} onClick={handleBioClick}>Tell us about yourself...</p>
            )}
          
          </header>
        </div>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </>
  );
}
/* 
A container to hold the profile picture

Make an editable bio (I need to research this) state

past posts show on the page
*/

//on page load I want to get bio from local storage