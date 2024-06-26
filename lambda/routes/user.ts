import { Hono } from "hono";

const app = new Hono();
const routes = app
	.get("/", (c) => c.text("Hello, userRoute!"))
	.get("/:id", (c) => {
		const { id } = c.req.param();
		return c.text(`Your ID is ${id}!`);
	});

export { routes as userRoute };
