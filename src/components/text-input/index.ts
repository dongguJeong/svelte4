export { default as TextInput } from './index.svelte';

export type TextInputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

export type TextInputSize = 'small' | 'medium' | 'large';

export type TextInputVariant = 'outlined' | 'filled' | 'standard';

export interface ITextInput {
	placeholder: string;
	variant: TextInputVariant;
	size: {
		[key in TextInputSize]: {
			fontSize: string;
			padding: string;
		};
	};
	type: TextInputType;
	disabled?: boolean;
	sx?: string;
}
