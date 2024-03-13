import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/fitbitProfile";
import Device from "../pages/fitbitDevice";
import Heartrate from "../pages/fitbitHeartrate";
import axios from "axios";

//Function to fetch user profile
const Main = (props) => {
  const [profileData, setProfileData] = useState(null);
  const [deviceData, setDeviceData] = useState(null);
  const [userHeartrate, setUserHeartrate] = useState(null);
  const URL = "http://localhost:4000/";

  //Function to fetch user profile
  const fetchData = async() => {
    try {
        //Fetch profile data
        const profileResponse = await axios.get(URL + "fitbit/data/profile", { withCredentials: true });
        setProfileData(profileResponse.data.data);

        //Fetch user device data
        const deviceResponse = await axios.get(URL + "fitbit/data/devices", { withCredentials: true });
        setDeviceData(deviceResponse.data.data);

        //Fetch user heartrate data
        const heartrateResponse = await axios.get(URL + "fitbit/data/heartrate", { withCredentials: true });
        setUserHeartrate(heartrateResponse.data.data);
    } catch (error) {
        console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container" style={{  marginLeft: "300px", maxWidth: "calc(100% - 300px)", padding: "20px" }}>
      <div className="row">
        <div className="col s12 m4">
          <Profile profileData={profileData} />
        </div>
        <div className="col s12 m4">
          <Device deviceData={deviceData} />
        </div>
        <div className="col s12 m4">
          <Heartrate userHeartrate={userHeartrate} />
        </div>
      </div>
    </div>
  );
};

export default Main;
