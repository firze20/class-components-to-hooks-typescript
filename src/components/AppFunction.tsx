import React, { useState } from "react";
import NewTask from "./NewTask";
import TasksList from "./TaskLists";

//Models

import {IState} from '../models/IState';


export default function AppFunction() {
  // hook your code up here ;)
  // hook your code up here ;)
  const [taskState, setTaskState] = useState<IState>({
    task: {},
    tasks: [],
  });

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setTaskState((prevState) => ({
        ...prevState,
        task: {
            ...prevState.task,
            [name]: value,
            id: Date.now()
        }
    }));
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(!taskState.task?.title) return;

    setTaskState((prevState) => ({
        tasks: [prevState.task, ...prevState.tasks],
        task: {}
    }));
  }

  const handleDelete = (taskIdToRemove: number) => {
    setTaskState((prevState) => ({
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskIdToRemove)
    }))
  }

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={taskState.task}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={taskState.tasks} handleDelete={handleDelete} />
    </main>
  );
}
