import React from "react";

import {ITask} from '../models/ITask';

interface ITaskListsProps {
  allTasks: ITask[];
  handleDelete(taskIdToRemove: number): void;
}

interface ITaskDetails {
  title?: string;
  description?: string;
  id?: number;
}

export default function TasksList({ allTasks, handleDelete }: ITaskListsProps) {
  return (
    <ul>
      {allTasks.map(({ title, description, id }: ITaskDetails) => (
        <li key={id}>
          <div>
            <h2>{title}</h2>
            <button onClick={() => handleDelete(id!)}>X</button>
          </div>
          {!description ? null : <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
}


