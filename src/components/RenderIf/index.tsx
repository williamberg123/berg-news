import { ReactNode } from 'react';

export default function RenderIf({ children, isTrue }: { children: ReactNode, isTrue: boolean }) {
	return isTrue ? children : null;
}
