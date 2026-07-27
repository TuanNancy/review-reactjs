function ProfileCard({ name, age, isOnline, children }) {
  return (
    <article className="profile-card">
      <div className="avatar" aria-hidden="true">
        {name.charAt(0)}
      </div>

      <div className="profile-content">
        <p className="eyebrow">COMPONENT CON: ProfileCard</p>
        <h2>{name}</h2>
        <p>{age} tuổi</p>
        <p className={isOnline ? "status online" : "status offline"}>
          {isOnline ? "● Đang trực tuyến" : "● Đang ngoại tuyến"}
        </p>
        <div className="card-note">{children}</div>
      </div>
    </article>
  );
}

export default ProfileCard;
