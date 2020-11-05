import {
	Application,
	Router,
	RouterContext,
} from 'https://deno.land/x/oak@v6.3.0/mod.ts';

const app = new Application();
const router = new Router();

// whenever we go to the root domain, the callback'll be called
router.get('/', (ctx: RouterContext) => {
	ctx.response.body = 'Hello Deno!';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({ hostname, port, secure }) => {
	console.log(`Listening on ${hostname}:${port}`);
});

await app.listen({ port: 8000 });
