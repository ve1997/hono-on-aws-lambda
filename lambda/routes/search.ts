import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const searchSchema = z.object({
	q: z.string().min(1, "Search query must not be empty!"),
});

const app = new Hono();
const routes = app.get("/", zValidator("query", searchSchema), (c) => {
	const { q } = c.req.valid("query");
	if (!q.trim()) {
		return c.text("You didn't search for anything!", 400);
	}
	return c.text(`You searched for ${q}!`, 200);
});

export { routes as searchRoute };
