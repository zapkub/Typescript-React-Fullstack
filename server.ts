/// <reference path="./typings/_all.d.ts"/>
import * as express from 'express';
import * as http from 'http';
import indexRoute from './server/route';

class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.app.set('port',process.env.PORT || 3000);
        if ('production' === this.app.get('env')) {

        }
        //Setup route
        this.routes();
    }

    private routes() {
        const router: express.Router = express.Router();
        const index:indexRoute.Index = new indexRoute.Index();

        router.get('/', index.index.bind(index.index));

        this.app.use(router);
    }
}

const server = Server.bootstrap();
server.app.listen(3000, () => {
    console.log('start webserver on port 3000');
});