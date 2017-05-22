const ArgumentParser = require('argparse').ArgumentParser;
const fs = require ('fs');
const path = require ('path');
const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Argparse example'
});

parser.addArgument(
    [ '-p', '--port' ],
    {
        help: 'Port'
    }
);

parser.addArgument(
    [ '--host' ],
    {
        help: 'Host of server'
    }
);

parser.addArgument(
    ['--protocol' ],
    {
        help: 'Protocl (ex: http)'
    }
);

const args = parser.parseArgs();

args.port = args.port || '8080';
args.host = args.host || 'localhost';
args.protocol = args.protocol || 'http';

const sampleConfigPathFile=

const configs = fs.readFile('SampleConfig.json', "utf8");


Object.keys(args).forEach(key => {
    constentSampleFile = constentSampleFile.replace(key.)
})


fs.writeFile(csvFile, string, (err) => {
    if (err) throw err;
console.log('The file has been saved!');
});
