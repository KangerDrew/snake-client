const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Connection successful. Now get addicted to video games.');
    conn.write('Name: DKK');
  });



  conn.on('data', (data) => {
    console.log(`Message from server: ${data}`);
  });

  conn.on('end', () => {
    console.log('Git gud. Game over');
    process.exit();
  })
  

  return conn;
};

module.exports = { connect };