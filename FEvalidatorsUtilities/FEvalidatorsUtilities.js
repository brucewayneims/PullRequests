//VALIDATORS
function StringIsNullOrEmpty(string) {

    if (string == undefined) {
        return true;
    }
    else {

        if (string.length < 1) {
            return true;
        }
        else {
            return false;
        }
    }

}
function NumberIsValid(cuerda) {

    if (StringIsNullOrEmpty(cuerda)) {
        return false;
    }
    else {
        cuerda = cuerda.toString();

        cuerda = cuerda.replace(/£/g, "");
        cuerda = cuerda.replace(/$/g, "");
        cuerda = cuerda.replace(/,/g, "");
        cuerda = cuerda.replace(/%/g, "");
        var elnumero = parseFloat(cuerda);

        if (isNaN(elnumero)) {
            return false;
        }
        else {
            if (isNaN(Number(elnumero))) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}
function ValidateDateWmin(cuerda, min) {

    //this function will return a bool for a valid date input compared to a minimum
    //date, so will return true if cuerda is valid and bigger than min

    var IsItAValidDate = true;
    //will only change to false if date is invalid

    IsItAValidDate = ValidateOneDate(cuerda);

    if (min !== undefined) {

        var ChekarFecha = ConvertDateddMMyyyyToJsDate(cuerda);
        var minimaFecha = ConvertDateddMMyyyyToJsDate(min);

        IsItAValidDate = (minimaFecha < ChekarFecha) ? true : false;
    }

    return IsItAValidDate;

}
function ValidateOneDate(inputDate) {
    //this function will return a bool for a valid date input 
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var IsItAValidDate = true;

    // Match the date format through regular expression dd-MM-yy
    if (inputDate.match(dateformat)) {
        //document.form1.text1.focus();
        //Test which seperator is used '/' or '-'
        var opera1 = inputDate.split('/');
        var opera2 = inputDate.split('-');
        lopera1 = opera1.length;
        lopera2 = opera2.length;

        // Extract the string into month, date and year
        if (lopera1 > 1) {
            var pdate = inputDate.split('/');
        }
        else if (lopera2 > 1) {
            var pdate = inputDate.split('-');
        }

        var dd = parseInt(pdate[0]);
        var mm = parseInt(pdate[1]);
        var yy = parseInt(pdate[2]);
        // Create list of days of a month [assume there is no leap year by default]
        var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        //check for a valid month
        if (mm > 0 && mm < 13) {

            //check for a valid day for mothns other than 2/february
            if (mm == 1 || mm > 2) {

                //12 > 30
                if (dd > ListofDays[mm - 1]) {
                    //alert('Invalid date format!');                        
                    //return false;
                    IsItAValidDate = false;
                }
            }

            if (mm == 2) {
                var lyear = false;
                //check to see if there is a leap year
                if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                    lyear = true;
                }

                if ((lyear == false) && (dd >= 29)) {
                    //alert('Invalid date format!');
                    //return false;
                    IsItAValidDate = false;
                }
                if ((lyear == true) && (dd > 29)) {
                    //alert('Invalid date format!');
                    //return false;
                    IsItAValidDate = false;
                }
            }

        } else {
            IsItAValidDate = false;
        }
    }
    else {

        //aditional check when on edit mode with the format yyyy-mm-dd
        var secondDateformat = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

        if (inputDate.match(secondDateformat)) {

            //it matched the second format
            //Test which seperator is used '/' or '-'
            var opera1 = inputDate.split('/');
            var opera2 = inputDate.split('-');
            lopera1 = opera1.length;
            lopera2 = opera2.length;

            // Extract the string into month, date and year
            if (lopera1 > 1) {
                var pdate = inputDate.split('/');
            }
            else if (lopera2 > 1) {
                var pdate = inputDate.split('-');
            }

            var dd = parseInt(pdate[2]);
            var mm = parseInt(pdate[1]);
            var yy = parseInt(pdate[0]);
            // Create list of days of a month [assume there is no leap year by default]
            var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            //check for a valid month
            if (mm > 0 && mm < 13) {

                //check for a valid day for mothns other than 2/february
                if (mm == 1 || mm > 2) {

                    //12 > 30
                    if (dd > ListofDays[mm - 1]) {
                        //alert('Invalid date format!');                        
                        //return false;
                        IsItAValidDate = false;
                    }
                }

                if (mm == 2) {
                    var lyear = false;
                    //check to see if there is a leap year
                    if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                        lyear = true;
                    }

                    if ((lyear == false) && (dd >= 29)) {
                        //alert('Invalid date format!');
                        //return false;
                        IsItAValidDate = false;
                    }
                    if ((lyear == true) && (dd > 29)) {
                        //alert('Invalid date format!');
                        //return false;
                        IsItAValidDate = false;
                    }
                }

            } else {
                IsItAValidDate = false;
            }

        }
        else {

            //alert("Invalid date format!");
            //document.form1.text1.focus();
            //return false;
            IsItAValidDate = false;
        }
    } //yy-mm-dd

    return IsItAValidDate;
}
function ValidateString(cuerda, min, max) {

    if (cuerda.length > min && cuerda.length < max) {
        return true;
    }
    else {

        if (cuerda.length == min) {
            //if field is not required (min=0) return true
            return true;
        }
        else {
            return false;
        }
    }
}
function ValidateEmail(emailStrTovalidate) {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailStrTovalidate)) {
        return true;
    }
    else {
        return false;
    }
}
function ValidateEmailList(emailsSplitbySemmiCollon) {

    var emails;
    var todoValido = false;

    if (!StringIsNullOrEmpty(emailsSplitbySemmiCollon)) {

        emails = emailsSplitbySemmiCollon.split(';');

        if (emails.length > 0 && emails.length < 10) {

            let emailValido = false;

            for (var i = 0; i < emails.length; i++) {

                if (!StringIsNullOrEmpty(emails[i])) {
                    emailValido = ValidateEmail(emails[i].trim());

                    if (!emailValido) {
                        break;
                    }
                }
            }

            if (emailValido) {
                todoValido = true;
            }
        }
    }

    return todoValido;
}
function ConvertStringIntoTrimArrWseparator(stringTosplit, separator) {

    var NewArray = [];

    NewArray = stringTosplit.split(separator)

    if (NewArray.length > 0) {

        for (var i = 0; i < NewArray.length; i++) {

            NewArray[i] = NewArray[i].trim();
        }
    }

    return NewArray;
}
//UTILITIES
function currencyFormat(num) {
    //receives a number a returns a formatted string as £ 125.35

    return '£ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
function parseDatesLong(dateStrJsonFomart) {

    //takes a json formated date and makes it on readable dd/mm/yyyy hh:mm
    var year = dateStrJsonFomart.substring(0, 4);
    var months = dateStrJsonFomart.substring(5, 7);
    var days = dateStrJsonFomart.substring(8, 10);
    var hours = dateStrJsonFomart.substring(11, 13);
    var minutes = dateStrJsonFomart.substring(14, 16);

    var LongDate = days + "/" + months + "/" + year + " at " + hours + ":" + minutes;

    return LongDate;
}
function ConvertManuallyToJSON(DateSTR) {
    //"2020-8-7" make it "2020-08-07"

    //dd-mm-yyyy e.g. 01-10-1982 usually from the new date txt due to the ajax asp setting of the control
    var formatddMMyyyy = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    //yyyy-mm-dd e.g. 1982-10-01 comming from the edit date input txt on the rows due to the html 5 setting of the control
    var formatYYYYmmDD = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    var JsonFormat;

    //Test which seperator is used '/' or '-'
    var opera1 = DateSTR.split('/');
    var opera2 = DateSTR.split('-');
    lopera1 = opera1.length;
    lopera2 = opera2.length;

    // Extract the string into month, date and year
    if (lopera1 > 1) {
        var pdate = DateSTR.split('/');
    }
    else if (lopera2 > 1) {
        var pdate = DateSTR.split('-');
    }

    if (DateSTR.match(formatddMMyyyy)) {

        var dd = parseInt(pdate[0]);
        var mm = parseInt(pdate[1]);
        var yy = parseInt(pdate[2]);
    }

    if (DateSTR.match(formatYYYYmmDD)) {

        var yy = parseInt(pdate[0]);
        var mm = parseInt(pdate[1]);
        var dd = parseInt(pdate[2]);
    }

    mm = mm < 10 ? "0" + mm : mm;
    dd = dd < 10 ? "0" + dd : dd;

    JsonFormat = yy + "-" + mm + "-" + dd + "T00:00:00";

    return JsonFormat;

}
function TurnDateFromJsonToStr(jsonDate) {

    //1900-01-01T000
    var dondeT = jsonDate.indexOf("T");
    var returnDate = "";

    if (dondeT !== -1) {

        var firstPartDate = jsonDate.substr(0, dondeT);

        var ano = Number(firstPartDate.substr(0, 4));
        var mes = Number(firstPartDate.substr(5, 2));
        var dia = Number(firstPartDate.substr(8, 2));

        if (ano !== 1900 && dia !== 1 && mes !== 1) {
            returnDate = dia + "/" + mes + "/" + ano;
        }
    }

    return returnDate;
}
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
function ConvertDateddMMyyyyToJsDate(ddmmyyyStr) {

    let intDateArr;
    //"14/12/2010"
    if (ddmmyyyStr.indexOf("/") === -1) {
        intDateArr = ddmmyyyStr.split('-');
    }
    else {
        intDateArr = ddmmyyyStr.split('/');
    }

    let elanoOn = Number(intDateArr[2]);
    let elmesOn = Number(intDateArr[1]) - 1;
    let eldiaOn = Number(intDateArr[0]);

    return new Date(elanoOn, elmesOn, eldiaOn);
}
function RecalculateLineHireDays(onHireDateStr, offHireDateStr) {
    //should received 2 valid dates in format dd/mm/yyyy and return an int 
    //as the total days on hire

    let recalDays = 0;
    let onHireJsDateF, offHireJsDateF;

    onHireJsDateF = ConvertDateddMMyyyyToJsDate(onHireDateStr);
    offHireJsDateF = ConvertDateddMMyyyyToJsDate(offHireDateStr);

    recalDays = CalculaTeDaysDifferenceJSdates(onHireJsDateF, offHireJsDateF);

    return recalDays;
}
function CalculaTeDaysDifferenceJSdates(onHireDateJS, offHireDateJS) {
    //should received 2 valid dates in format dd/mm/yyyy and return an int 
    //as the total days on hire

    let recalDays = 0;
    let oneDay = 1000 * 60 * 60 * 24;

    recalDays = (offHireDateJS.getTime() - onHireDateJS.getTime()) / oneDay;
    recalDays = recalDays.toFixed(0);

    return recalDays;
}