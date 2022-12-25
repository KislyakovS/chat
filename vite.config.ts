import {
	defineConfig, ServerOptions, BuildOptions, AliasOptions,
} from 'vite';
import path from 'path';

interface ResolveOptions {
	alias?: AliasOptions
}

const server: ServerOptions = {
	open: true,
};

const build: BuildOptions = {
	outDir: '../build',
	emptyOutDir: true,
};

const resolve: ResolveOptions = {
	alias: {
		'@': path.resolve(__dirname, './src'),
	},
};

export default defineConfig({
	root: './src',
	envDir: __dirname,
	envPrefix: 'CLIENT_',
	server,
	build,
	resolve,
});
