import React from "react";
import { Link } from "react-router-dom";
import logo from "./../img/nexa-trans-white.png";
import PROFILE from "../profile.js";

export default function HSProfileFillerBox() {
  const { profile } = PROFILE;
  return (
    <div className="row top">
      <div className="col-2">
        <div className="card card-body delta">
          {profile.map((p) => (
            <ul>
              <li>
                <img className="smallTwo" src={logo} alt="logo"></img>
              </li>
              <li>
                <h3>NEXT Mortgage LLC.</h3>
                <hr></hr>
              </li>
              <li>
                <h3>NMLS# {p.nmls2}</h3>
                <hr></hr>
              </li>
              <li>
                <h3>AZMB# {p.azmb}</h3>
                <hr></hr>
              </li>
              <li>
                <p>An Equal Housing Lender All Rights Reserved. © 2021</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="col-2">
        <div className="card card-body delta">
          {profile.map((p) => (
            <ul>
              <li>
                <h1>Contact Us</h1>
              </li>
              <li>
                <h3>
                  <i class="fas fa-map-marker-alt"></i> 3100 W Ray RD STE 201
                  Office # 209, Chandler AZ 85226
                </h3>
                <hr></hr>
              </li>
              <li>
                <a className="footerPhoneLink" href={`tel:${p.phone}`}>
                  <h3>
                    <i className="fas fa-phone"></i> {p.phone}
                  </h3>
                </a>
                <hr></hr>
              </li>
              <li>
                <a className="footerPhoneLink" href={`mailto:${p.email}`}>
                  <h3>
                    <i className="far fa-envelope footerPhoneLink"></i>{" "}
                    {p.emailText}
                  </h3>
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="col-2">
        <div className="card card-body delta">
          {profile.map((p) => (
            <ul>
              <li>
                <h1>Resources</h1>
              </li>
              <li>
                <Link className="footerPhoneLink" to="/loan-programs">
                  <h3>Loan Programs</h3>
                </Link>
                <hr></hr>
              </li>
              <li>
                <a
                  className="footerPhoneLink"
                  href="https://nexamortgage.com/privacy-policy/"
                >
                  <h3>Privacy Policy</h3>
                </a>
                <hr></hr>
              </li>
              <li>
                <a className="footerPhoneLink" href={p.nmlsLink1}>
                  <h3>NMLS Consumer Access</h3>
                  <hr></hr>
                </a>
              </li>
              <li>
                <a className="footerPhoneLink" href={p.nmlsLink2}>
                  <h3>NMLS 35815</h3>
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
