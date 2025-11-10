import { useEffect, useState } from "react";

const STORAGE_KEY = "task_manager_tasks_v1";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all"); // all | active | completed

  // load tasks from localStorage once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setTasks(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load tasks from localStorage:", e);
    }
  }, []);

  // save tasks to localStorage whenever tasks change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks to localStorage:", e);
    }
  }, [tasks]);

  const addTask = (e) => {
    e?.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTasks((prev) => [...prev, { text: trimmed, done: false, id: Date.now() }]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const removeTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    const ok = window.confirm(`Remove task: "${task?.text}"?`);
    if (!ok) return;
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    const ok = window.confirm("Remove all completed tasks?");
    if (!ok) return;
    setTasks((prev) => prev.filter((t) => !t.done));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "completed") return t.done;
    return true;
  });

  return (
    <div>
      <h2>My Tasks</h2>

      <form onSubmit={addTask} style={{ marginBottom: 12 }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new task"
          aria-label="New task"
        />
        <button type="submit" style={{ marginLeft: 8 }}>
          Add
        </button>
      </form>

      <div style={{ marginBottom: 8 }}>
        <button
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          aria-pressed={filter === "active"}
          style={{ marginLeft: 6 }}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          aria-pressed={filter === "completed"}
          style={{ marginLeft: 6 }}
        >
          Completed
        </button>
        <button onClick={clearCompleted} style={{ marginLeft: 12 }}>
          Clear Completed
        </button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : filteredTasks.length === 0 ? (
        <p>No tasks match this filter.</p>
      ) : (
        <ul style={{ paddingLeft: 0, listStyle: "none" }}>
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 6,
                padding: 8,
                borderRadius: 6,
                border: "1px solid #e0e0e0",
              }}
            >
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                aria-label={`Mark ${task.text} as ${task.done ? "incomplete" : "complete"}`}
              />
              <span style={{ flex: 1, textDecoration: task.done ? "line-through" : "none" }}>
                {task.text}
              </span>
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: 12 }}>
        <small>{tasks.length} task{tasks.length !== 1 ? "s" : ""}</small>
      </div>
    </div>
  );
}
