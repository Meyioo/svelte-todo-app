import type { InputType } from 'flowbite-svelte';

export type ButtonType = 'submit' | 'button' | 'reset';
export interface IFormField {
	name: string;
	label: string;
	placeholder: string;
	type: InputType;
}
