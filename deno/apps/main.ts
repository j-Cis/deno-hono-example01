import { Hono } from "hono";
export const appMain = new Hono();
export type AppMain = typeof appMain;


appMain.get('/', (c) => {
    return c.text('Hello Hono!');
});
  
appMain.get('/api/hello', (c) => {
    return c.json({
        ok: true,
        message: 'Hello Hono!',
    });
});