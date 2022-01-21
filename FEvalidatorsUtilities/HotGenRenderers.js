//var LineCostRenderer, LineNumberRenderer;
//var DeliveredCheckRenderer, HiredDaysRenderer;
//var PlantTextRenderer;
function isEmptyRow(instance, row) {
    var rowDataArr = instance.getDataAtRow(row);
    let fullStr = "";

    for (var i = 0; i < rowDataArr.length; i++) {
        fullStr = fullStr + rowDataArr[i];
    }

    if (StringIsNullOrEmpty(fullStr)) {
        return true;
    }
    else {
        return false;
    }
}
LineCostRenderer = function (instance, td, row, col, prop, value, cellProperties) {
    //Handsontable.renderers.TextRenderer.apply(this, arguments);

    if (isEmptyRow(instance, row)) {
        td.style.color = '#999';
        td.style.fontStyle = "italic";
    }
    else {
        td.style.backgroundColor = 'darkGray';
        td.style.color = 'black';
        td.style.fontWeight = 'bold';
        td.style.fontStyle = 'normal';
    }

    Handsontable.renderers.NumericRenderer.apply(this, arguments);

    return td;
};
LineNumberRenderer = function (instance, td, row, col, prop, value, cellProperties) {
    //Handsontable.renderers.TextRenderer.apply(this, arguments);
    Handsontable.renderers.NumericRenderer.apply(this, arguments);
    td.style.backgroundColor = 'black';
    td.style.color = 'white';
    td.style.fontWeight = 'bold';
    td.style.textAlign = "center";
    return td;
};
DeliveredCheckRenderer = function (instance, td, row, col, prop, value, cellProperties) {

    Handsontable.renderers.CheckboxRenderer.apply(this, arguments);
    if (value) {
        td.style.backgroundColor = 'darkblue';
        td.style.textAlign = "center";
    }
    else {
        td.style.backgroundColor = 'white';
        td.style.textAlign = "center";
    }
    return td;
};
HiredDaysRenderer = function (instance, td, row, col, prop, value, cellProperties) {

    if (isEmptyRow(instance, row)) {
        td.style.color = '#999';
        td.style.fontStyle = "italic";
    }
    else {

        td.style.backgroundColor = '#288ffe';
        td.style.textAlign = 'center';
        td.style.fontStyle = 'normal';
        td.style.color = 'black';
    }

    Handsontable.renderers.NumericRenderer.apply(this, arguments);

    return td;

};
HiredDaysRendererForPO = function (instance, td, row, col, prop, value, cellProperties) {

    if (isEmptyRow(instance, row)) {
        td.style.color = '#999';
        td.style.fontStyle = "italic";
    }
    else {

        td.style.backgroundColor = 'LightGray';
        td.style.textAlign = 'center';
        td.style.fontStyle = 'normal';

        //check if it is a plant item
        let curBudgetID = instance.getDataAtCell(row, 3);

        if (curBudgetID == 5) {

            td.style.color = 'black';
        }
        else {
            td.style.color = 'LightGray';
        }
    }

    Handsontable.renderers.NumericRenderer.apply(this, arguments);

    return td;

};
PlantReadOnlyTextRenderer = function (instance, td, row, col, prop, value, cellProperties) {

    td.style.fontStyle = "italic";

    if (isEmptyRow(instance, row)) {
        td.style.color = '#999';
    }
    else {

        Handsontable.renderers.TextRenderer.apply(this, arguments);
        td.style.color = 'black';
        td.style.backgroundColor = '#bbb';
        td.style.fontStyle = 'normal';
    }

    return td;
};
//used with ClientPOsXContract 2.0.10
MarginPrenderer = function (instance, td, row, col, prop, value, cellProperties) {

    Handsontable.renderers.TextRenderer.apply(this, arguments);
    td.innerHTML = Number(value * 100).toFixed(2) + '%';
    td.style.textAlign = "center";
    td.style.fontWeight = "bold";

    if (value > 0.15) {
        td.style.backgroundColor = "lightgreen";
    }
    else {
        if (value > 0.10 && value < 0.14) {
            td.style.backgroundColor = "yellow";
        }
        else {
            td.style.backgroundColor = "red";
            td.style.color = "yellow";
        }
    }
}
budgetUsageRen = function (instance, td, row, col, prop, value, cellProperties) {

    Handsontable.renderers.TextRenderer.apply(this, arguments);
    td.innerHTML = Number(value * 100).toFixed(2) + '%';
    td.style.textAlign = "center";

    if (value < 0.8) {
        td.style.backgroundColor = "lightgreen";
    }
    else {
        if (value > 0.81 && value < 0.99) {
            td.style.backgroundColor = "yellow";
        }
        else {
            td.style.backgroundColor = "red";
            td.style.color = "yellow";
        }
    }
}
SalesRenderer = function (instance, td, row, col, prop, value, cellProperties) {
    //Handsontable.renderers.TextRenderer.apply(this, arguments);
    Handsontable.renderers.NumericRenderer.apply(this, arguments);
    td.style.backgroundColor = 'lightgreen';
    td.style.color = 'black';
    td.style.fontWeight = 'bold';
    return td;
}
CostRenderer = function (instance, td, row, col, prop, value, cellProperties) {
    //Handsontable.renderers.TextRenderer.apply(this, arguments);
    Handsontable.renderers.NumericRenderer.apply(this, arguments);
    td.style.backgroundColor = 'pink';
    td.style.color = 'black';
    return td;
}
InvoiceRequestRenderer = function (instance, td, row, col, prop, value, cellProperties) {

    if (isEmptyRow(instance, row)) {
        
        if (col !== 2) {
            
            td.style.backgroundColor = 'darkGray';                        
            td.style.color = 'darkGray';
            td.className = 'htDimmed';
        }
        else{
            Handsontable.renderers.DropdownRenderer.apply(this, arguments);
            td.style.fontStyle = "italic";
            td.style.color = '#999';
        }
    }
    else{

        switch (col) {
            case 0: 
                Handsontable.renderers.CheckboxRenderer.apply(this, arguments);
                if (value) {
                    td.style.backgroundColor = 'darkblue';
                    td.style.textAlign = "center";
                }
                else {
                    td.style.backgroundColor = 'white';
                    td.style.textAlign = "center";
                }                
                break;          //    delete checkbox
            case 1:
                Handsontable.renderers.NumericRenderer.apply(this, arguments);                
                td.style.backgroundColor = 'black';
                td.style.color = 'white';
                td.style.fontWeight = 'bold';
                td.style.textAlign = "center";                
                break;              //  line number
            case 2:
                Handsontable.renderers.DropdownRenderer.apply(this, arguments);
                break;
            case 3:                                
                Handsontable.renderers.DropdownRenderer.apply(this, arguments);                
                break;
            case 4:
                td.style.backgroundColor = 'darkGray';
                td.style.color = 'black';
                td.style.fontWeight = 'bold';
                td.style.fontStyle = 'normal';                
                Handsontable.renderers.NumericRenderer.apply(this, arguments);
                break;
            case 5:
                Handsontable.renderers.NumericRenderer.apply(this, arguments);
                td.style.backgroundColor = 'pink';
                td.style.color = 'black';
                td.style.textAlign = "center";                
                td.innerHTML = `${(value * 100).toFixed(2)}%`                
                break;      //  po usage
            case 6:
                Handsontable.renderers.NumericRenderer.apply(this, arguments);
                break;      // this invoice
            case 7:
                td.style.color = 'black';
                Handsontable.renderers.TextRenderer.apply(this, arguments);
                break;
            case 8:
                Handsontable.renderers.HtmlRenderer.apply(this, arguments);                
                break;
            case 13:
                Handsontable.renderers.CheckboxRenderer.apply(this, arguments);                
                break;
            default:
                Handsontable.renderers.NumericRenderer.apply(this, arguments);                
                break;
        }
    }
    
    return td;
    
}