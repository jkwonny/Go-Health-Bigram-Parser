const mockRequest = () => ({});

const mockResponse = (strings) => {
    const res = { locals: { text: strings}};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

const bigramcontroller = require('../server/controller');


describe("Bigram Parser", () => {
    test(`should return 'None: 'No bigrams in the text.' for a text file with one word`, () => {
        let req = mockRequest();
        let res = mockResponse("testing");
        bigramcontroller.parse(req, res, () => {});

        expect(res.locals.histogram).toEqual({"None": 'No bigrams in the text.'});
    })

    test(`should return a histogram of one key with value one for a text file with two words (doesn't matter if identical or not)`, () => {
        let req = mockRequest();
        let res = mockResponse("testing hello");
        bigramcontroller.parse(req, res, () => {});
        let histogramKeys = Object.keys(res.locals.histogram).length;

        expect(histogramKeys).toEqual(1);
        expect(res.locals.histogram).toEqual({"testing-hello": 1});
    })

    test(`should return a histogram of one key with value two for a text file with three identical words`, () => {
        let req = mockRequest();
        let res = mockResponse("hello hello hello");
        bigramcontroller.parse(req, res, () => {});
        let histogramKeys = Object.keys(res.locals.histogram).length;

        expect(histogramKeys).toEqual(1);
        expect(res.locals.histogram).toEqual({"hello-hello": 2});
    })

    //3 different strings resulting in two bigrams with a value of 1
    test(`should return a histogram of two keys with value one for a text file with three different words`, () => {
        let req = mockRequest();
        let res = mockResponse("hello goodbye farewell");
        bigramcontroller.parse(req, res, () => {});
        let histogramKeys = Object.keys(res.locals.histogram).length;

        expect(histogramKeys).toEqual(2);
        expect(res.locals.histogram).toEqual({"hello-goodbye": 1, "goodbye-farewell":1 });
    })

})
//testing react components
//components
//buttons
//divs
