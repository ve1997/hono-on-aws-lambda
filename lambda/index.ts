import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

const app = new Hono();

export const routes = app.get("/", (c) => c.text("Hello, Hono!"));

export const handler = handle(app);
