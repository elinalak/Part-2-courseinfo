const Course = ({ course }) => {
  return (
    <>
      <Content course={course} />
    </>
  );
};

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
    <>
      {name} {exercises}
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course course={courses} />;
};

export default App;
