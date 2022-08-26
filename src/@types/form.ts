import { ReactNode } from 'react';

export interface FormType {
	children: ReactNode;
	submitFunc: () => void;
}
