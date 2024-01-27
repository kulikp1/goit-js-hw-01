function getElementWidth(content, padding, border) {
    const contentNum = parseFloat(content);
    const paddingNum = parseFloat(padding);
    const borderNum = parseFloat(border);
    const total = (contentNum + paddingNum * 2 + borderNum * 2);
    return (total);
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));