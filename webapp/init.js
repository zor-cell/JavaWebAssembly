async function init() {
    await cheerpjInit();
    const lib = await cheerpjRunLibrary("/app/lib/Connect4.jar");

    const Test = await lib.connect4.Test;
    let test = await new Test;
    await test.hello();

    const Main = await lib.connect4.Main;
    await Main.main([]);
}

init();