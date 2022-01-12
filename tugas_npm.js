const os = require('os');
// console.log (os)

// fs.writeFile("os.json", JSON.stringify(os), (err) => {
//     if (err) throw err;
//   });

const fs = require('fs');
// console.log (fs)

const specCpu = os.cpus();
console.log (specCpu)

fs.writeFile("cpu.json", JSON.stringify(specCpu), (err) => {
    if (err) throw err;
  });