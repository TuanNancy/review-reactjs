import { useState } from "react";
import { studentProfile } from "../data/studentProfile";

function StudentStateExample() {
  // State starts with data imported from a separate data file.
  const [student, setStudent] = useState(studentProfile);
  const propertyName = "email";

  function changeLearningStatus() {
    setStudent({
      ...student,
      "learning-status": "Đã hoàn thành bài useState",
    });
  }

  return (
    <section className="student-state-example">
      <p className="eyebrow">USESTATE WITH OBJECT DATA</p>
      <h2>Thông tin học viên</h2>
      <p>Dữ liệu ban đầu được lấy từ <code>src/data/studentProfile.js</code>.</p>

      <div className="student-details">
        <p><strong>Họ tên:</strong> {student.fullName}</p>
        <p><strong>Thành phố:</strong> {student.address.city}</p>
        <p><strong>Email:</strong> {student[propertyName]}</p>
        <p><strong>Trạng thái:</strong> {student["learning-status"]}</p>
      </div>

      <button type="button" onClick={changeLearningStatus}>
        Cập nhật trạng thái học
      </button>

      <pre>{`// Dot notation: tên key viết trực tiếp
student.fullName
student.address.city

// Bracket notation: key đặt trong dấu []
student["learning-status"]
student[propertyName] // propertyName = "email"`}</pre>
    </section>
  );
}

export default StudentStateExample;
