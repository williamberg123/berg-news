import { ReactNode } from 'react';

export default function RenderIf({ children, isTrue }: { children: ReactNode | any, isTrue: boolean }) {
	return isTrue ? children : null;
}
