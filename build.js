const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const inputFile = '/Users/yixinzhang/IdeaProjects/redux/app.js';
const outputFile = '/Users/yixinzhang/IdeaProjects/redux/build/app.js';

const options = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
};

fs.readFile(inputFile, 'utf8', (err, inputCode) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    babel.transform(inputCode, options, (err, result) => {
        if (err) {
            console.error('Error transforming code:', err);
            return;
        }

        fs.mkdir(path.dirname(outputFile), { recursive: true }, (err) => {
            if (err) {
                console.error('Error creating output directory:', err);
                return;
            }

            fs.writeFile(outputFile, result.code, 'utf8', (err) => {
                if (err) {
                    console.error('Error writing output file:', err);
                    return;
                }

                console.log('Build completed successfully!');
            });
        });
    });
});
