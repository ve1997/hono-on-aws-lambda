import { Hono } from "hono";

const app = new Hono();
const routes = app.get("/", (c) => c.text("Hello, userRoute!"));

export { routes as userRoute };
