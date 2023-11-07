const {Circle, Triangle, Square, Polygon} = require("../lib/shape")


test("A red square", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect x = "75" y = "25" height= "150" width = "150" fill= "red"/>');
})


test("A orange triangle", () => {
    const shape = new Triangle();
    shape.setColor("orange");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="orange" />');
})


test("A pink circle using hexadecimal number", () => {
    const shape = new Circle();
    shape.setColor("FFC0CB");
    expect(shape.render()).toEqual('<circle r = "100" cx = "150" cy = "100" fill="FFC0CB"/>');
})

test("A purple star", () => {
    const shape = new Polygon();
    shape.setColor("purple");
    expect(shape.render()).toEqual(`<polygon points = "150,10 90,198 240,78 60,78 210,198" height= "150" width = "150" fill= "purple"/>`);
})
