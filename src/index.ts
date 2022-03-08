import {createServer} from "http"
import {getPage} from "./page";

const server = createServer(async (req, res): Promise<void> => {
    try {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(await getPage());
    } catch (error: unknown) {
        console.error(error);
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(500);
        res.end('nok');
    }
})

server.listen(80, '0.0.0.0', () => {
    console.info('Server is listening on internal port 80...')
});