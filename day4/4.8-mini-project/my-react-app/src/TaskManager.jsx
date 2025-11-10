import { useState } from "react";
 
 export default function TaskManager() {
   const [tasks, setTasks] = useState([]);
   const [text, setText] = useState("");
 
   const addTask = (e) => {
     e.preventDefault();
     if (text.trim()) {
       setTasks([...tasks, { text, done: false }]);
       setText("");
     }
   };
 
   const toggleTask = (index) => {
     const newTasks = [...tasks];
     newTasks[index].done = !newTasks[index].done;
     setTasks(newTasks);
   };
 
   const removeTask = (index) => {
     setTasks(tasks.filter((_, i) => i !== index));
   };
 
   return (
     <div>
       <h2>My Tasks</h2>
       <form onSubmit={addTask}>
         <input
           type="text"
           value={text}
           onChange={(e) => setText(e.target.value)}
           placeholder="Add new task"
         />
         <button type="submit">Add</button>
       </form>
 
       {tasks.length === 0 ? (
         <p>No tasks yet.</p>
       ) : (
         <ul>
           {tasks.map((task, index) => (
             <li key={index}>
               <input
                 type="checkbox"
                 checked={task.done}
                 onChange={() => toggleTask(index)}
               />
               <span style={{ textDecoration: task.done ? "line-through" : "" }}>
                 {task.text}
               </span>
               <button onClick={() => removeTask(index)}>Remove</button>
             </li>
           ))}
         </ul>
       )}
     </div>
   );
 }