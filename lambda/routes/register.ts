import { Hono } from "hono";

const app = new Hono();
const routes = app.get("/", (c) => c.text("Hello, registerRoute!"));

export { routes as registerRoute };
