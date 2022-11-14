const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

const Total = ({ course }) => {
  const sum = course.parts.reduce((ac, s) => ac + s.exercises, 0);
  return <h4>total {sum} exercises</h4>;
};

const Header = (props) => {
  const { course } = props;
  return <h2>{course.name}</h2>;
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part, index) => (
        <p key={index}>
          <Part name={part.name} exercises={part.exercises} />
        </p>
      ))}
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <>
      {" "}
      {name} {exercises}
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
