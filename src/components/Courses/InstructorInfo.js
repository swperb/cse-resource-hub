// components/InstructorInfo.js
export default function InstructorInfo({ instructor }) {
    <div>
      <h2>Instructor Information</h2>
      <p>{instructor.name}</p>
      <p>Email: {instructor.email}</p>
      <p>Office Hours: {instructor.officeHours}</p>
    </div>
  };

  