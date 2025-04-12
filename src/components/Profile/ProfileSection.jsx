import React, { useEffect, useState } from "react";
import ShowFeed from "../Feed/ShowFeed";
import EditProfileHook from "../../hooks/EditProfileHook";
import { useSelector } from "react-redux";

const ProfileSection = () => {
  const user = useSelector((state) => state.user);
  const editProfile = EditProfileHook();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [showToast,setShowToast] = useState(false)


  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setAge(user.age || "");
      setGender(user.gender || "");
      setAbout(user.about || "");
      setPhotoUrl(user.photoUrl || "");
    }
  }, [user]);

  const handleSubmit =  async (e)=>{
    e.preventDefault();
       const result = await   editProfile({ firstName, lastName, photoUrl, age, gender, about });
    if (result.success) { 
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000); 
    }
  };

  return (
    <section className="flex justify-center gap-[40px]">
      <div className="toast toast-top mt-[100px] toast-end">



      {showToast && (
        <div className="toast toast-top mt-[100px] toast-end">
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}


</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="card w-96 bg-[#080808] shadow-sm">
            <div className="card-body">
              <h2 className="card-title justify-center">Profile</h2>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  className="input"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  className="input"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input
                  className="input"
                  type="email"
                  value={user?.emailId}
                  readOnly
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input
                  className="input"
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <select
                  className="input"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
                </select>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Profile URL</legend>
                <input
                  className="input"
                  type="text"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  placeholder="Enter image URL"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <textarea
                  className="input min-h-[120px] pt-[5px]"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="Write a few lines about yourself..."
                />
              </fieldset>

              <div className="card-actions justify-center mt-4">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <ShowFeed  user={{
    firstName,
    lastName,
    age,
    about,
    photoUrl,
  }}/>
    </section>
  );
};

export default ProfileSection;
