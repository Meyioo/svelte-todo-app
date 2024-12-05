import type { ITodo } from './todo.model';

export interface IHeaderProps {
	title: string;
	showSearch?: boolean;
	showCompleteBtn?: boolean;
}

export interface ITodoItemProps {
	todo: ITodo;
}

export interface ITodoListProps {
	completed: boolean;
}
