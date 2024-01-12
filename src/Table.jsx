import { useState } from "react";
import user from "./Api";

const Table = () => {
  const [api, setApi] = useState(user);
  const [feild, setFeild] = useState("");
  const [count, setCount] = useState(0);
  const [task1, setTask1] = useState("Task");
  const [task2, setTask2] = useState("Tasks");

  //delete funtion
  function del(parametr) {
    const deleted = api.filter((value) => value.id !== parametr);
    setApi(deleted);
    setCount(count - 1);
  }

  //create
  function type(e) {
    setFeild(e.target.value);
  }

  function create() {
    if (feild != "") {
      let object = { id: api.length + 1, name: feild };
      setCount(count + 1);
      setApi([...api, object]);
    }
    if (feild == null) {
      setApi("");
    }
  }

  return (
    <div className="todo">
      {count > 1 ? (
        <h1>
          {count} {task2}
        </h1>
      ) : (
        <h1>
          {count} {task1}
        </h1>
      )}
      <div className="task">
        {api.map((r) => {
          return (
            <ul key={r.id} className="ul">
              <li>{r.name}</li>
              <li>
                <button onClick={() => del(r.id)}>Delete</button>
              </li>
            </ul>
          );
        })}
      </div>

      <div className="add">
        <input
          className="info"
          onChange={type}
          type="text"
          placeholder="add todo"
        />
        <button onClick={create}>Add</button>
      </div>
    </div>
  );
};

export default Table;
