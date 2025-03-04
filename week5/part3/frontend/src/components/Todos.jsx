/*
todos =[
{
  title: "Go to Market",
  description: "Buy ingredients to prepare dinner",
},
]
*/

export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo, index) {
        return (
          <div key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
