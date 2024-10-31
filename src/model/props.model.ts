import type { MouseEventHandler } from 'svelte/elements';
import type { ButtonType } from './form.model';
import type { Todo } from './todo.model';

export interface IButtonLinkProps {
	href: string;
	label: string;
}

export interface IButtonProps {
	type: ButtonType;
	onclick: MouseEventHandler<HTMLButtonElement>;
	label: string;
}

export interface IHeaderProps {
	title: string;
}

export interface ITodoItemProps {
	todo: Todo;
}
