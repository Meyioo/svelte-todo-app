import type { InputType } from 'flowbite-svelte';

export interface IFormField {
	name: string;
	label: string;
	placeholder: string;
	type: InputType;
}
