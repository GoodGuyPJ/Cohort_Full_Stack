import React, { useState } from "react";


const Todos = () => {
  const [todo, setTodo] = useState([]);
  const [inputval, setInputval] = useState("");

  const handleSubmit = () => {
    if (!inputval.trim()) return;

    setTodo((prev) =>
      prev.concat({
        text: inputval,
        id: Math.floor(Math.random() * 1000),
        date: new Date().toLocaleDateString(),
        start: "",
        end: "",
        done: null,
      })
    );

    setInputval("");
  };

  const handleDoneChange = (id, value) => {
    setTodo((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: value } : t))
    );
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="New ToDo"
        value={inputval}
        onChange={(e) => setInputval(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      {/* Table */}
      <table
        border="1"
        style={{ marginTop: "20px", width: "100%", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>Todo List</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Check Done</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((t) => (
            <tr key={t.id}>
              <td>{t.text}</td>
              <td>{t.date}</td>
              <td>
                <input
                  type="time"
                  value={t.start}
                  onChange={(e) =>
                    setTodo((prev) =>
                      prev.map((item) =>
                        item.id === t.id
                          ? { ...item, start: e.target.value }
                          : item
                      )
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="time"
                  value={t.end}
                  onChange={(e) =>
                    setTodo((prev) =>
                      prev.map((item) =>
                        item.id === t.id
                          ? { ...item, end: e.target.value }
                          : item
                      )
                    )
                  }
                />
              </td>
              <td>
                <label>
                  <input
                    type="checkbox"
                    checked={t.done === true}
                    onChange={() => handleDoneChange(t.id, true)}
                  />{" "}
                  Yes
                </label>
                <label style={{ marginLeft: "10px" }}>
                  <input
                    type="checkbox"
                    checked={t.done === false}
                    onChange={() => handleDoneChange(t.id, false)}
                  />{" "}
                  No
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
