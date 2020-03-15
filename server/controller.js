const fs = require('fs');
const path = require('path')

const bigramcontroller = {}

bigramcontroller.readFile = (req, res, next) => {
    console.log('this is working');
    const { browser_file_path } = req.body
    console.log(browser_file_path);
    const text = fs.readFileSync(path.join(__dirname, `../testtext${browser_file_path}`), "utf8")
    res.locals.text = text;
    next();
}

bigramcontroller.parse = (req,res, next) => {

}

bigramcontroller.writeFile = (req, res, next) => {

}

module.exports = bigramcontroller;