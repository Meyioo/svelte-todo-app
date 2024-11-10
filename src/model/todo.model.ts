export enum PriorityEnum {
	Low = 'low',
	Medium = 'medium',
	High = 'high'
}

export interface Todo {
	title: string;
	description: string;
	completed: boolean;
	selected: boolean;
	priority: PriorityEnum;
	deadline?: Date | null;
}
