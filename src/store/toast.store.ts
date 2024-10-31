import { writable } from 'svelte/store';

export const ToastStore = writable('');

export function showToast(message: string): void {
	ToastStore.set(message);
}
