$.fn.sliderCheckbox = function(options){
    const settings      = $.extend({}, $.fn.sliderCheckbox.defaults, options);
    const container     = $(this);
    const id            = container.attr("data-id");
    let trueValue;
    let falseValue;

    init();
    $("body")
        .on("change", "#" + id, event => {
            let checkbox = $(event.target);
            if (checkbox.is(":checked")){
                checkbox.val(trueValue);
                if (settings.onTrue){
                    settings.onTrue();
                }
            } else{
                checkbox.val(falseValue);
                if (settings.onFalse){
                    settings.onFalse();
                }
            }
        })

    function init(){
        makeClasses();
        let textTrue = container.attr("data-text-true");
        let textFalse = container.attr("data-text-false");
        container.addClass(settings.cssClasses.scContainer);
        if (container.attr("data-name")){
            let name = container.attr("data-name");
            trueValue = container.attr("data-value-true");
            falseValue = container.attr("data-value-false");
            container.append("<input type='checkbox' name='" + name + "' class='" + settings.cssClasses.scCheckbox + "' id='" + id + "'>");
        } else{
            container.append("<input type='checkbox' class='" + settings.cssClasses.scCheckbox + "' id='" + id + "'>");
        }
        let name    = container.attr("data-name") === undefined ? "" : " name='" + container.attr("data-name") + "'";

        let label   = $("<label class='" + settings.cssClasses.scLabel + "' for='" + id + "'></label>");
        label.append("<span class='" + settings.cssClasses.scInner + "' data-text-true='" + textTrue + "' data-text-false='" + textFalse + "'></span>");
        label.append("<span class='" + settings.cssClasses.scCircle + "'></span>");
        container.append(label);
    }

    function makeClasses(){
        const css = [{
            name:       ".scContainer",
            content:    "border: none;position: relative;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;width: 125px;"
        },{
            name:       ".scCheckbox",
            content:    "display: none;"
        },{
            name:       ".scLabel",
            content:    "border: 2px solid #666;border-radius: 20px;cursor: pointer;display: block;overflow: hidden;"
        },{
            name:       ".scInner",
            content:    "display: block;margin-left: -100%;transition: margin 0.3s ease-in 0s;width: 200%;"
        },{
            name:       ".scInner:before, .scInner:after",
            content:    "box-sizing: border-box;display: block;float: left;font-family: sans-serif;font-size: 14px;font-weight: bold;height: 30px;line-height: 30px;padding: 0;width: 50%;"
        },{
            name:       ".scInner:before",
            content:    "background-color: #66bb6a;color: #fff;content: attr(data-text-true);padding-left: .75em;"
        },{
            name:       ".scInner:after",
            content:    "background-color: #eee;color: #666;content: attr(data-text-false);padding-right: .75em;text-align: right;"
        },{
            name:       ".scCircle",
            content:    "background-color: #66bb6a;border: 2px solid #666;border-radius: 20px;bottom: 0;display: block;margin: 5px;position: absolute;right: 91px;top: 0;transition: all 0.3s ease-in 0s;width: 20px;"
        },{
            name:       ".scCheckbox:checked + .scLabel .scInner",
            content:    "margin-left: 0;"
        },{
            name:       ".scCheckbox:checked + .scLabel .scCircle",
            content:    "background-color: #eee;right: 0;"
        }]

        let style;
        if ($("style").length === 0){
            style = $("<style></style>");
            $("head").append(style);
        } else{
            style = $("style");
        }
        let classes = "";
        css.map((item) => {
            classes += item.name + "{" + item.content + "}";
        })
        style.html(classes);
    }
}

$.fn.sliderCheckbox.defaults = {
    cssClasses: {
        scContainer:    "scContainer",
        scCheckbox:     "scCheckbox",
        scLabel:        "scLabel",
        scInner:        "scInner",
        scCircle:       "scCircle"
    },
    onTrue:     null,
    onFalse:    null
}