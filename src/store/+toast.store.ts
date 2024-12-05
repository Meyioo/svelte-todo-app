import { writable } from 'svelte/store';

export interface IToast {
	message: string;
	color: string;
	duration: number;
}

export const ToastStore = writable<IToast | null>();

export function showToast(toast: IToast): void {
	ToastStore.set(toast);
	setTimeout(() => {
		ToastStore.set(null);
	}, toast.duration);
}
