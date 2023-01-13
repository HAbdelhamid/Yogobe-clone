import httpProxy from 'http-proxy';
import url from 'url';

const DEFAULT_API_URL = 'https://devenv.yogobe.com';
const { host, protocol } = url.parse(
  process.env.APOLLO_BACKEND_RAILS ?? DEFAULT_API_URL
);

const API_URL = protocol + '//' + host;

const proxy = httpProxy.createProxyServer({
  target: API_URL,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  // Return a Promise to let Next.js know when we're done
  // processing the request:
  return new Promise((resolve, reject) => {
    //
    req.url = '/graphql';
    //
    req.headers.host = host;
    // to white-list request & prevent rakattack from blocking it...
    req.headers['ORIGIN-CLIENT'] = 'Vercel';

    // Don't forget to handle errors:
    proxy.once('error', reject);
    // Forward the request to the API
    proxy.web(req, res, { target: API_URL }, resolve);
  });
};