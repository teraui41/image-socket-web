import SocketClusterClient from 'socketcluster-client';

let socket = SocketClusterClient.create({
  hostname: process.env.REACT_APP_DOMAIN,
  port: process.env.REACT_APP_PORT,
});

(async () => {
  for await (let event of socket.listener('connect')) {
    console.log('Socket is connected', event);
  }
})();

(async () => {
  for await (let {error} of socket.listener('error')) {
    console.error(error);
  }
})();


export default socket;
