const {Text, TriangleText} = require("../lib/text")

// Test for regular text

test("hello black", ()  => {
    const text = new Text();
    text.characters = "hello";
    text.color = "black";
    expect(text.render()).toEqual(`<text x = "150" y = "115" text-anchor="middle" font-size="50" fill="black">hello</text>`)
})

// Test for TriangleText text

test("hello black", ()  => {
    const tritext = new TriangleText();
    tritext.characters = "hello";
    tritext.color = "black";
    expect(tritext.render()).toEqual(`<text x = "150" y = "150" text-anchor="middle" font-size="50" fill="black">hello</text>`)
})
