const isPortReachable = require('is-port-reachable');
 
(async () => {
    console.log(await isPortReachable(3000));
    //=> true
})();