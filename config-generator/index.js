const fs = require('fs');
const path = require('path');
const ArgumentParser = require('argparse').ArgumentParser;

const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Argparse example'
});

parser.addArgument(
    [ '-p', '--port' ],
    {
        help: 'Port of server'
    }
);

parser.addArgument(
    [ '--host' ],
    {
        help: 'Host of server'
    }
);

parser.addArgument(
    [ '--protocol' ],
    {
        help: 'Protocol of server'
    }
);

const args = parser.parseArgs();

args.port = args.port || '8080';
args.host = args.host || 'localhost';
args.protocol = args.protocol || 'http';

const sampleConfigPathFile = path.join(__dirname, 'sample.config.json');
const configPathFile = path.join(__dirname, 'config.json');

fs.readFile(sampleConfigPathFile, 'utf8', (err, contentSampleFile) => {
    if (err) throw err;
    // First
    // contentSampleFile = contentSampleFile.replace("PORT", args.port)
    //     .replace("HOST", args.host)
    //     .replace("PROTOCOL", args.protocol);
    // console.log(contentSampleFile);

    // Second
    // const objConfig = JSON.parse(contentSampleFile);
    //
    // objConfig.port = args.port;
    // objConfig.host = args.host;
    // objConfig.protocol = args.protocol;
    //
    // console.log(JSON.stringify(objConfig));

    // Par tableau associatif ["port", "host", "protocol"]
    Object.keys(args).forEach(key => {
        contentSampleFile = contentSampleFile.replace(key.toUpperCase(), args[key])
    });

    fs.writeFile(configPathFile, contentSampleFile, 'utf8', (err) => {
        if (err) throw err;

        console.log("Le fichier de configuration est créé.");
    });
});

