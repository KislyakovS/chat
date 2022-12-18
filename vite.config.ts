import { defineConfig, ServerOptions, BuildOptions } from 'vite';

const server: ServerOptions = {
	open: true,
};

const build: BuildOptions = {
	outDir: '../build',
	emptyOutDir: true,
};

export default defineConfig({
	root: './src',
	envDir: '../',
	envPrefix: 'CLIENT_',
	server,
	build,
});
