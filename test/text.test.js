const {Text, TriangleText} = require("../lib/text")

// Test for reqular text

test("hello black", ()  => {
    const text = new Text();
    text.characters = "hello";
    text.color = "black";
    expect(text.render()).toEqual(`<text x = "150" y = "115" text-anchor="middle" font-size="50" fill="black">hello</text>`)
})