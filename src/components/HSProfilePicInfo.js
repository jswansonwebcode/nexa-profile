import React from "react";
import profilePic from "../img/profilePic.jpg";
import PROFILE from "../profile.js";

export default function HSProfilePicInfo() {
  const { profile } = PROFILE;
  return (
    <div className="row top alpha">
      <div>
        <img className="medium" src={profilePic} alt="profile" />
      </div>
      <div className="col-1">
        <div className="card card-body">
          {profile.map((p) => (
            <ul key={p.id}>
              <li>
                <h1 className="piName">{p.name}</h1>
              </li>
              <li>
                <h3>NMLS# {p.nmls}</h3>
              </li>
              <li>
                <a className="fas fa-phone phoneLink" href={`tel:${p.phone}`}>
                  {" "}
                  Call or text {p.name}
                </a>
              </li>
              <li>
                <h3 className="piTalk">
                  Let's get you started with a faster, easier, cheaper mortgage
                </h3>
              </li>
              <li>
                <a
                  className="applyNow"
                  href={p.loanLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
