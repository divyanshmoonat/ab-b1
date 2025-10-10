import { useEffect, useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  //   const [userName, setuserName] = useState("John");

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    setTodoList(data);
  };

  useEffect(() => {
    // componentDidMount => Mounting phase => Called only once
    // fetch("https://jsonplaceholder.typicode.com/todos", {
    //   method: "GET",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setTodoList(data);
    //   })
    //   .catch((err) => console.log(err));
    fetchData();
  }, []);

  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {todoList.map((element) => {
          return <li key={element.id}>{element.title}</li>;
        })}
      </ul>
      {/* {userName} */}
    </>
  );
};

export default Todo;
