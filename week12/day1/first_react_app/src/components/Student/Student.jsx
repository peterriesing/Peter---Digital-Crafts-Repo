import React from "react";

export const Student = ({ student }) => {
  return (
    <div>
      <p>
        Name: {student.name}, age: {student.age}
      </p>
    </div>
  );
};
