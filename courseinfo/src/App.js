const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  );
};

const Header = (props) => {
  const { course } = props;
  return <h2>{course.name}</h2>;
};

const Content = ({ course }) => {
  return (
    <>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
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
    ],
  };

  return <Course course={course} />;
};

export default App;
