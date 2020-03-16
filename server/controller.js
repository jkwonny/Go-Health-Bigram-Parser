const fs = require('fs');
const path = require('path')

const bigramcontroller = {}

//function that reads the text file
bigramcontroller.readFile = (req, res, next) => {
    const { browser_file_path } = req.body
    const text = fs.readFileSync(path.join(__dirname, `../testtext${browser_file_path}`), "utf8")
    res.locals.text = text;
    return next();
}

//function that parses/builds histogram
bigramcontroller.parse = (req,res, next) => {
    const histogram = {};
    let newTextArray = res.locals.text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    newTextArray = newTextArray.split(/\s+/);

    if (newTextArray <= 1) {
        return 'No bigrams in the text.';
    }
    for (let i = 0; i < newTextArray.length; i++) {
        if (i+1 <= newTextArray.length-1) {
            let key = newTextArray[i] + '-' + newTextArray[i+1];
            if (histogram[key]) {
                histogram[key] += 1;
            } else {
                histogram[key] = 1;
            }
    }
}
    res.locals.histogram = histogram;
    return next();
}


module.exports = bigramcontroller;