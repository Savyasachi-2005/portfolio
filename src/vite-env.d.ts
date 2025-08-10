/// <reference types="vite/client" />

// Allow importing PDF assets (e.g., import resume from './file.pdf')
declare module '*.pdf' {
	const src: string;
	export default src;
}
