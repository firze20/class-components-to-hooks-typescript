import React from "react";

import {ITask} from '../models/ITask';

interface INewTaskProps {
    newTask: ITask;
    handleChange({target}: React.ChangeEvent<HTMLInputElement>): void;
    handleSubmit(event: React.FormEvent): void;
}

export default function NewTask({ newTask, handleChange, handleSubmit }: INewTaskProps) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New task"
        value={newTask.title || ""}
        onChange={handleChange}
      />
      {!newTask.title ? null : (
        <>
          <textarea
            name="description"
            placeholder="Details..."
            value={newTask.description || ""}
            //onChange={handleChange}
          />
          <button type="submit">Add Task</button>
        </>
      )}
    </form>
  );
}

