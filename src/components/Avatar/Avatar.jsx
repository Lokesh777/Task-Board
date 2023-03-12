import React from 'react';
import "./Avatar.css"

const AvatarStatus = ({ imageSrc, notificationCount, isOnline }) => {
  return (
    <div className="NotifyAvtar">
      <img src={imageSrc} className="NotifyAvtarImg" alt="User Avatar" />
      {notificationCount > 0 && <div className="avatar-notification">{notificationCount}</div>}
      <div className={`avatar-status ${isOnline ? 'online' : 'offline'}`}></div>
    </div>
  );
};

export default AvatarStatus;
