import React from "react";

const Course = ({ course }) => {
  return (
    <>
      <Header text="Web development curriculum" />
      <Content course={course} />
    </>
  );
};

const Header = ({ text }) => <h1>{text}</h1>;
const Total = ({ part }) => {
  const sum = part.reduce((ac, s) => ac + s.exercises, 0);
  return <h4>total {sum} exercises</h4>;
};

const Content = ({ course }) => {
  return (
    <>
      {course.map((i, index) => (
        <span key={index}>
          <h2>{i.name}</h2>
          {i.parts.map(function (k, index) {
            return (
              <div key={k.id}>
                <Part name={k.name} exercises={k.exercises} />
              </div>
            );
          })}
          <Total part={i.parts} />
        </span>
      ))}
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

export default Course;
