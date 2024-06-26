import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const registerSchema = z.object({
	uname: z.string().min(3, "Username must be at least 3 characters long!"),
	email: z.string().email("Invalid email format!"),
});

const app = new Hono();
const routes = app
	.get("/", (c) => c.text("Hello, registerRoute!"))
	.post("/", zValidator("json", registerSchema), (c) => {
		const { uname, email } = c.req.valid("json");
		const res = {
			message: `You registered with username: ${uname} and email: ${email}`,
			timestamp: new Date().toISOString(),
		};

		return c.json(res, 200);
	});

export { routes as registerRoute };
