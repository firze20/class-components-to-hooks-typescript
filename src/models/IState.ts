export interface IState {
    task: ITask;
    tasks: ITask[];
}

interface ITask {
    [key: string]: string | number | readonly string[] | undefined;
    id?: number;
    title?: string;
}

