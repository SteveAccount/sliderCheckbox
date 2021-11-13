# sliderCheckbox

A bővítménnyel egy testreszabható megjelenésű szöveges csúszkát kapsz, ami egy `<input type="checkbox'> `html elemet személyesít meg.

Helyezd el a kódodban a következőt:

`<div data-id='colorSelector' data-text-true='Fekete' data-text-false='Fehér' data-name='color', data-value-true='black', data-value-false='white'></div>`

`$("#colorSelector").sliderCheckbox();`

A `<div>` első három attribútumát meg kell adni. Az utolsó három nem kötelező. Utóbbi attribútumokat a létrejövő `<input>` kapja meg.

A testreszabás módja:

`$("#colorSelector").sliderCheckbox({
cssClasses: {
        scContainer:    "my-scContainer",
        scCheckbox:     "my-scCheckbox",
        scLabel:        "my-scLabel",
        scInner:        "my-scInner",
        scCircle:       "my-scCircle"
    },
    onTrue: () => {
        console.log("igaz");
    },
    onFalse: () => {
        console.log("hamis");
    }
});`