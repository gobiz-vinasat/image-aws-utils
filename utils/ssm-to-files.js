const fs = require('fs');

function ssmToFiles(ssmInput, ssmOutput) {
    let ssm = JSON.parse(fs.readFileSync(ssmInput, 'utf8'));

    for (const item of ssm.Parameters) {
        let file = `${ssmOutput}${item.Name}`;
        fs.writeFileSync(file, item.Value);
        console.log(`Writed: ${file}`);
    }
}

ssmToFiles(process.argv[2], process.argv[3] || './');
