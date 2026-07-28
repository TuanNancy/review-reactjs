import { useState } from "react";
import { students as initialStudents } from "../data/students";

// Ví dụ 1: component này tự lấy dữ liệu của chính nó.
// Không nhận props và cũng không được StudentMapExample gọi.
export function StudentRow() {
  const student = initialStudents[0]; // Lấy học sinh đầu tiên trong mảng
  const [note, setNote] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  function handleNoteChange(event) {
    setNote(event.target.value);
  }

  function handleRemove() {
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <li className="student-row">
      <div>
        <strong>{student.fullName}</strong>
        <p>{student.course}</p>
      </div>

      <label>
        Ghi chú
        <input
          value={note}
          onChange={handleNoteChange}
          placeholder="Ví dụ: đã nộp bài"
        />
      </label>

      <button type="button" className="secondary-button" onClick={handleRemove}>
        Xóa
      </button>
    </li>
  );
}

function StudentMapExample() {
  const [students, setStudents] = useState(initialStudents);

  function moveHaToTop() {
    const ha = students.find(function (student) {
      return student.id === 103;
    });
    const otherStudents = students.filter(function (student) {
      return student.id !== 103;
    });

    if (ha) {
      setStudents([ha, ...otherStudents]);
    }
  }

  function removeStudent(studentId) {
    const remainingStudents = students.filter(function (student) {
      return student.id !== studentId;
    });

    setStudents(remainingStudents);
  }

  return (
    <section className="student-map-example">
      <p className="eyebrow">MAP() AND STABLE KEYS</p>
      <h2>Danh sách học sinh</h2>
      <p>
        Ví dụ này tự lặp mảng <code>students</code> để tạo từng thẻ{" "}
        <code>li</code>. Mỗi phần tử vẫn cần <code>key</code> là{" "}
        <code>student.id</code>.
      </p>

      <button type="button" onClick={moveHaToTop}>
        Đưa Thu Hà lên đầu
      </button>

      <ul className="student-list">
        {students.map(function (student) {
          return (
            <li key={student.id} className="student-row">
              <div>
                <strong>{student.fullName}</strong>
                <p>{student.course}</p>
              </div>

              <button
                type="button"
                className="secondary-button"
                onClick={function () {
                  removeStudent(student.id);
                }}
              >
                Xóa
              </button>
            </li>
          );
        })}
      </ul>

      <pre>{`{students.map(function (student) {
  return (
    <li key={student.id}>
      {student.fullName}
    </li>
  );
})}`}</pre>
    </section>
  );
}

export default StudentMapExample;
