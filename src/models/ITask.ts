export interface ITask {
    [key: string]: string | number | readonly string[] | undefined;
    id?: number;
    title?: string;
}

