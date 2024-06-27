import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { cors } from "hono/cors";
import { registerRoute } from "./routes/register";
import { searchRoute } from "./routes/search";
import { userRoute } from "./routes/user";

const app = new Hono();
app.use(cors());

export const routes = app
	.get("/", (c) => c.text("Hello, Hono!"))
	.route("/register", registerRoute)
	.route("/search", searchRoute)
	.route("/user", userRoute);

export const handler = handle(app);
