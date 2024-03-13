import React from "react";

const Heartrate = ({ userHeartrate }) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Heart Rate</span>
        {userHeartrate ? (
          <div>
            <p><strong>Heart Rate Value:</strong> {userHeartrate.hrv}</p>
          </div>
        ) : (
          <p>Loading heart rate data...</p>
        )}
      </div>
    </div>
  );
};

export default Heartrate;