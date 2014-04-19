define(
    [
        'grobo/lib',
        'grobo/canvas',
        'grobo/input',
        'grobo/state-manager',
        'grobo/engine'
    ],
    function (lib, refCanvas, refInput, refStateManager, refEngine) {
        var canvas = lib.create(refCanvas).init('canvas'),
            input = lib.create(refInput).init(canvas),
            stateManager = lib.create(refStateManager).init(input),
            engine = lib.create(refEngine).init(stateManager);

        engine.start();

        window.setTimeout(function () {
            engine.stop();
        }, 5000);
    }
);