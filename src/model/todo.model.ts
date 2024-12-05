export interface ITodo {
	id: number | null;
	title: string;
	description: string;
	completed: boolean;
	selected: boolean;
	dueDate: Date;
	priority: PriorityEnum | null;
}

export enum PriorityEnum {
	Low = 'low',
	Medium = 'medium',
	High = 'high'
}
