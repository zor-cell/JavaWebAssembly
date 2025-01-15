async function init() {
    //initialise cheerPJ
    await cheerpjInit();

    //load compiled .jar library
    const lib = await cheerpjRunLibrary("/app/lib/JavaWebAssembly.jar");

    //call Main
    const Main = await lib.code.Main;
    await Main.main([]);

    //Call Test
    const Test = await lib.code.Test;
    let test = await new Test;
    const response = await test.hello();
    console.log(response);
}

init();