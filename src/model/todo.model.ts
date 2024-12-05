import type { PriorityLevel } from '$lib/constants/priority.constants';

export interface ITodo {
	id: number | null;
	createDate: Date;
	title: string;
	description: string;
	completed: boolean;
	selected: boolean;
	dueDate: Date;
	priority: PriorityLevel;
}
