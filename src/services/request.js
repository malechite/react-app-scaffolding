//import env from './EnvironmentManager';
import superagent from 'superagent';

const TIMEOUT = 8000;
const METHODS = ['GET', 'POST', 'PUT', 'HEAD', 'PATCH', 'DELETE'];

export default async function request(args) {
    // Validate Args.

    if (!METHODS.includes(args.method)) {
        throw new Error('Invalid Request Method');
    }

    args = Object.assign(
        /*{
            baseurl: env.get('host'),
            auth: 'Bearer ' + env.get('jwt')
        },*/
        args
    );

    if (!args.baseurl) {
        throw new Error('Invalid Request Baseurl');
    }

    // Can only use either body OR attach/fields
    // See:  http://visionmedia.github.io/superagent/#multipart-requests
    if (args.body && (args.attach || args.fields)) {
        throw new Error('Body vs Attach Conflict');
    }

    // Build Request

    let req = superagent(args.method, `${args.baseurl}${args.url}`);

    if (args.query) {
        req = req.query(args.query);
    }

    if (args.headers) {
        req = req.set(args.headers);
    }

    if (args.auth) {
        req = req.set('Authorization', args.auth);
    }

    if (args.body) {
        req = req.send(args.body);
    }

    if (args.attach) {
        Object.entries(args.attach).forEach(([key, options]) => {
            if (options && options.file && options.filename) {
                req = req.attach(key, options.file, options.filename);
            } else {
                // http://visionmedia.github.io/superagent/#multipart-requests
                req = req.attach(key, options); // options is file path or blob/buffer
            }
        });
    }

    if (args.fields) {
        Object.entries(args.fields).forEach(([key, value]) => {
            req = req.field(key, value);
        });
    }

    if (args.timeout !== false) {
        req = req.timeout(args.timeout || TIMEOUT);
    }

    return await req;
}

