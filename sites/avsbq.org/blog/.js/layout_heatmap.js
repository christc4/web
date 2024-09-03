"use strict";
/*
2020-09-21
2024-04-19
2024-04-23
2024-04-29
 */
/// <reference path="xah_keyboard_lib.ts" />
const f_changeLayout16999 = () => {
    const targetLayout = document.querySelector("input[name='layoutMenu211']:checked").value;
    const svgBox = document.getElementById("keyboard_layout_tzpQH");
    const keyElements = svgBox.querySelectorAll("*[data-layout]");
    const sourceLayout = keyElements[0].getAttribute("data-layout");
    f_change_layout(keyElements, sourceLayout, targetLayout);
    f_remove_heatmap(svgBox);
    for (let xkey of svgBox.querySelectorAll("text[x]")) {
        f_draw_heatmap(xkey, document.querySelector("input[name='langFreq334']:checked").value);
    }
};
f_changeLayout16999();
{
    for (let radioButton of document.querySelectorAll("input[name='layoutMenu211']")) {
        radioButton.addEventListener("input", f_changeLayout16999, false);
    }
}
{
    for (let radioButton of document.querySelectorAll("input[name='langFreq334']")) {
        radioButton.addEventListener("input", f_changeLayout16999, false);
    }
}
