import React, { useState } from "react";

export function CreateTodo(props) {
  //react-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        id="title"
        style={{
          padding: "10px",
          margin: "10px",
        }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        id="desc"
        style={{
          padding: "10px",
          margin: "10px",
        }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        style={{
          padding: "10px",
          margin: "10px",
        }}
        onClick={() => {
          //axios
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            console.log(json);
            alert("Todo added successfully");
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
