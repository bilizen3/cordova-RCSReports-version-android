function addDataClasificationFirstTime() {//aqui se hace uin insert
    var query = "INSERT INTO " + TABLE_CLASIFICATION + "("
            + KEY_MUY_BUENA + " ,"
            + KEY_LIMIT_INF_BUENA + ", "
            + KEY_LIMIT_SUP_BUENA + ", "
            + KEY_LIMIT_INF_ACEPTABLE + ", "
            + KEY_LIMIT_SUP_ACEPTABLE + ", "
            + KEY_LIMIT_INF_DEFICIENTE + ", "
            + KEY_LIMIT_SUP_DEFICIENTE + ", "
            + KEY_LIMIT_INF_CRITICO + ", "
            + KEY_LIMIT_SUP_CRITICO + ", "
            + KEY_MUY_CRITICO + ") VALUES(?,?,?,?,?,?,?,?,?,?);";

    try {
        localDB.transaction(function (transaction) {
            transaction.executeSql(query, ["100", "99", "100", "95", "99", "90", "95", "85", "90", "85"], function (transaction, results) {
            }, errorHandler);
        });
    } catch (e) {
        console.log("Error addData " + e + ".");
    }
}

function henry2() {
    $('.list').height($(window).height() - $('header').height() - $('.select-clasification').height());
}
$(window).resize(function () {
    $('.list').height($(window).height() - $('header').height() - $('.select-clasification').height());
});




function existDataClasification() {/**Check if exists data , but yes or yes this function fills the table clasification***/

    var url = 0;
    var checkData = 0;
    var query = "SELECT COUNT(*) AS urlBase FROM " + TABLE_CLASIFICATION;
    try {
        localDB.transaction(function (transaction) {
            transaction.executeSql(query, [], function (transaction, results) {
                url = results.rows.item(0).urlBase;
                if (url > 0) {

                } else {

                    addDataClasificationFirstTime();
                    getDataClasification();

                }
            }, function (transaction, error) {
                console.log("Error: " + error.code + "<br>Mensage: " + error.message);
            });
        });
    }
    catch (e) {
        console.log("Error existsData " + e + ".");
    }
}

function getDataClasification() {
    var muy_buena = "";
    var inf_buena = "";
    var sup_buena = "";
    var inf_aceptable = "";
    var sup_aceptable = "";
    var inf_deficiente = "";
    var sup_deficiente = "";
    var inf_critico = "";
    var sup_critico = "";
    var muy_critico = "";

    localDB.transaction(function (tx) {
        tx.executeSql('SELECT * FROM ' + TABLE_CLASIFICATION, [], function (tx, results) {

            muy_buena = results.rows.item(0).MUYBUENA;
            inf_buena = results.rows.item(0).INF_BUENA;
            sup_buena = results.rows.item(0).SUP_BUENA;
            inf_aceptable = results.rows.item(0).INF_ACEPTABLE;
            sup_aceptable = results.rows.item(0).SUP_ACEPTABLE;
            inf_deficiente = results.rows.item(0).INF_DEFICIENTE;
            sup_deficiente = results.rows.item(0).SUP_DEFICIENTE;
            inf_critico = results.rows.item(0).INF_CRITICO;
            sup_critico = results.rows.item(0).SUP_CRITICO;
            muy_critico = results.rows.item(0).MUYCRITICO;

            $('.clasRange1').val(sup_buena);
            $('#clasRange1').val(sup_buena);

            $('.clasRange2').val(sup_aceptable);
            $('#clasRange2').val(sup_aceptable);

            $('.clasRange3').val(sup_deficiente);
            $('#clasRange3').val(sup_deficiente);

            $('.clasRange4').val(sup_critico);
            $('#clasRange4').val(sup_critico);

            $('.clasRange5').val(muy_critico);
            $('#clasRange5').val(muy_critico);
        });
    });
}

function getDataClasification22() {
    var muy_buena = "";
    var inf_buena = "";
    var sup_buena = "";
    var inf_aceptable = "";
    var sup_aceptable = "";
    var inf_deficiente = "";
    var sup_deficiente = "";
    var inf_critico = "";
    var sup_critico = "";
    var muy_critico = "";


}

/*************All methods and function for TABLE DATE*************/

function existDataDate() {

    var count = 0;

    var query = "SELECT COUNT(*) AS countRDate FROM " + TABLE_CUSTOM_DATE_RANGE;
    try {
        localDB.transaction(function (transaction) {
            transaction.executeSql(query, [], function (transaction, results) {
                count = results.rows.item(0).countRDate;
                if (count > 0) {


                    localDB.transaction(function (tx) {
                        tx.executeSql('SELECT * FROM ' + TABLE_CUSTOM_DATE_RANGE, [], function (tx, results) {

                            var dateStart = results.rows.item(0).dateStart.toString();
                            var dateEnd = results.rows.item(0).dateEnd.toString();
                            var dateUntil = results.rows.item(0).dateChoosed.toString();


                            document.getElementById('dateStart').innerHTML = dateStart;
                            document.getElementById('dateEnd').innerHTML = dateEnd;
                            document.getElementById('dateToCompare').innerHTML = dateUntil;

                        });

                    });

                } else {

                    /***asignamos fecha por defecto la primera vez***/
                    /***date of today ***/
                    var obj_date = new Date();
                    var monthToday = obj_date.getMonth() + 1;
                    var dayToday = obj_date.getDate();

                    var dateOfToday = obj_date.getFullYear() + '-' +
                            (('' + monthToday).length < 2 ? '0' : '') + monthToday + '-' +
                            (('' + dayToday).length < 2 ? '0' : '') + dayToday;


                    /*** dateStart of Month ***/
                    var obj_date2 = new Date();
                    var month = obj_date2.getMonth() + 1;
                    var firstDayMonth = new Date(obj_date2.getFullYear(), obj_date2.getMonth(), 1);/**only day**/
                    var dateStartMonth = obj_date2.getFullYear() + '-' +
                            (('' + month).length < 2 ? '0' : '') + month + '-' +
                            (('' + firstDayMonth.getDate()).length < 2 ? '0' : '') + firstDayMonth.getDate();


                    insertFirstTimeDate(dateStartMonth, dateOfToday, dateOfToday);




                }
            }, function (transaction, error) {
                console.log("Error: " + error.code + "<br>Mensage: " + error.message);
            });
        });
    }
    catch (e) {
        console.log("Error existsData " + e + ".");
    }

}

function insertFirstTimeDate(dateStart, dateEnd, dateUntil) {

    var query = "INSERT INTO " + TABLE_CUSTOM_DATE_RANGE +
            "(" + KEY_DATE_START + ", " + KEY_DATE_END + ", " + KEY_DATE_CHOOSED + ") VALUES (?,?,?)";
    try {
        localDB.transaction(function (transaction) {
            transaction.executeSql(query, [dateStart, dateEnd, dateUntil], function (transaction, results) {

            }, errorHandler);

        });
    } catch (e) {
        console.log("Error addData " + e + ".");
    }
}


function updaTableCustomDate() {

    var dateStart = document.getElementById('dateStart').innerHTML;
    var dateEnd = document.getElementById('dateEnd').innerHTML;
    var dateUntil = document.getElementById('dateToCompare').innerHTML;

    var arrayDateStart = dateStart.split("-");

    var arrayDateEnd = dateEnd.split("-");

    var arrayDateUntil = dateUntil.split("-");



    var query = "UPDATE " + TABLE_CUSTOM_DATE_RANGE + " SET "
            + KEY_DATE_START + " = '" + arrayDateStart[0] + "-" + arrayDateStart[1] + "-" + arrayDateStart[2] + "', "
            + KEY_DATE_END + " = '" + arrayDateEnd[0] + "-" + arrayDateEnd[1] + "-" + arrayDateEnd[2] + "', "
            + KEY_DATE_CHOOSED + " = '" + arrayDateUntil[0] + "-" + arrayDateUntil[1] + "-" + arrayDateUntil[2] + "'";

    try {
        localDB.transaction(function (transaction) {
            transaction.executeSql(query, [], function (transaction, results) {
                if (!results.rowsAffected) {
                    console.log("Error updateState");
                }
                else {
                    console.log("Update realizado:" + results.rowsAffected);
                }
            }, errorHandler);
        });
    } catch (e) {
        console.log("Error updateState " + e + ".");
    }

}



/**Call when you touch to see dialog clasification**/
function addDataClasification() {

    getDataClasification();
    mostrarInfo();

}


function updateClasification() {

    var sup_buena = document.getElementById("clasRange1").value;
    var sup_aceptable = document.getElementById("clasRange2").value;
    var sup_deficiente = document.getElementById("clasRange3").value;
    var sup_critico = document.getElementById("clasRange4").value;
    var muy_critico = document.getElementById("clasRange5").value;



    if (sup_buena == "" || sup_aceptable == "" || sup_deficiente == "" ||
            sup_critico == "" || muy_critico == "") {

        document.getElementById('textgeneral').innerHTML = "DATA INCOMPLETA";
        $('#modalgeneral').modal("show");

    } else {

        if (parseInt(sup_buena) > parseInt(sup_aceptable)
                && parseInt(sup_aceptable) > parseInt(sup_deficiente)
                && parseInt(sup_deficiente) > parseInt(sup_critico)
                && parseInt(sup_critico) > parseInt(muy_critico)) {

            var query = "UPDATE " + TABLE_CLASIFICATION + " SET "
                    + KEY_MUY_BUENA + "=" + sup_buena + ", "
                    + KEY_LIMIT_INF_BUENA + "=" + sup_aceptable + ", "
                    + KEY_LIMIT_SUP_BUENA + "=" + sup_buena + ", "
                    + KEY_LIMIT_INF_ACEPTABLE + "=" + sup_deficiente + ", "
                    + KEY_LIMIT_SUP_ACEPTABLE + "=" + sup_aceptable + ", "
                    + KEY_LIMIT_INF_DEFICIENTE + "=" + sup_critico + ", "
                    + KEY_LIMIT_SUP_DEFICIENTE + "=" + sup_deficiente + ", "
                    + KEY_LIMIT_INF_CRITICO + "=" + muy_critico + ", "
                    + KEY_LIMIT_SUP_CRITICO + "=" + sup_critico + ", "
                    + KEY_MUY_CRITICO + "=" + muy_critico;

            try {
                localDB.transaction(function (transaction) {
                    transaction.executeSql(query, [], function (transaction, results) {
                        if (!results.rowsAffected) {
                            console.log("Error updateState");
                        }
                        else {
                            console.log("Update realizado:" + results.rowsAffected);
                            var value = "";
                            value = $(".select-clasification .init").attr('data-value');

                            $('#show_info').modal('toggle');
                            downloadStoreClasification(value);

                        }
                    }, errorHandler);
                });
            } catch (e) {
                console.log("Error updateState " + e + ".");
            }

        } else {
        }
    }
}

function downloadRefresh() {

    var value = "";/**antes de descargar verificamos que opcion esta seleccionada en el combo clasificacion**/
    value = $(".select-clasification .init").attr('data-value');


    downloadStoreClasification(value);
}


function downloadStoreClasification(_valueSelected) {
    var xurl = "";
    var ip = "";
    var port = "";
    var alias = "";
    var site = "";
    var state_clasification = _valueSelected;


    /*********variables*******/
    var muy_buena = 0;
    var inf_buena = 0;
    var sup_buena = 0;
    var inf_aceptable = 0;
    var sup_aceptable = 0;
    var inf_deficiente = 0;
    var sup_deficiente = 0;
    var inf_critico = 0;
    var sup_critico = 0;
    var muy_critico = 0;


    /***Dates***/
    var dateStart = "";
    var dateEnd = "";
    var dateUntil = "";
    var array;
    /****get****date****/






    /***get range date ***/
    /***date of today ***/
    var obj_date = new Date();
    var monthToday = obj_date.getMonth() + 1;
    var dayToday = obj_date.getDate();

    var dateOfToday = obj_date.getFullYear() + '-' +
            (('' + monthToday).length < 2 ? '0' : '') + monthToday + '-' +
            (('' + dayToday).length < 2 ? '0' : '') + dayToday;


    /*** dateStart of Month ***/
    var obj_date2 = new Date();
    var month = obj_date2.getMonth() + 1;
    var firstDayMonth = new Date(obj_date2.getFullYear(), obj_date2.getMonth(), 1);/**only day**/
    var dateStartMonth = obj_date2.getFullYear() + '-' +
            (('' + month).length < 2 ? '0' : '') + month + '-' +
            (('' + firstDayMonth.getDate()).length < 2 ? '0' : '') + firstDayMonth.getDate();


    localDB.transaction(function (tx) {
        tx.executeSql('SELECT * FROM ' + TABLE_URL + ' WHERE ' + KEY_USE + ' = 1', [], function (tx, results) {
            ip = results.rows.item(0).ip;
            port = results.rows.item(0).port;
            alias = results.rows.item(0).alias;
            site = results.rows.item(0).site;

            xurl = "http://" + ip + ":" + port + "/" + site + "/ReportClasification/POST";


            /*******************   Verificamos si    ***************************/

            /******************************************/

            localDB.transaction(function (tx) {
                tx.executeSql('SELECT * FROM ' + TABLE_CLASIFICATION, [], function (tx, results) {

                    muy_buena = results.rows.item(0).MUYBUENA;
                    inf_buena = results.rows.item(0).INF_BUENA;
                    sup_buena = results.rows.item(0).SUP_BUENA;
                    inf_aceptable = results.rows.item(0).INF_ACEPTABLE;
                    sup_aceptable = results.rows.item(0).SUP_ACEPTABLE;
                    inf_deficiente = results.rows.item(0).INF_DEFICIENTE;
                    sup_deficiente = results.rows.item(0).SUP_DEFICIENTE;
                    inf_critico = results.rows.item(0).INF_CRITICO;
                    sup_critico = results.rows.item(0).SUP_CRITICO;
                    muy_critico = results.rows.item(0).MUYCRITICO;

                });
            });

            /*********************************************/
            /**********OBTENEMOS LAS FECHAS DE LA BASE DE DATOS**************/
            localDB.transaction(function (tx) {
                tx.executeSql('SELECT * FROM ' + TABLE_CUSTOM_DATE_RANGE, [], function (tx, results) {

                    dateStart = results.rows.item(0).dateStart.toString();
                    dateEnd = results.rows.item(0).dateEnd.toString();
                    dateUntil = results.rows.item(0).dateChoosed.toString();
//                       

                    //array = {DateStart:"2015-08-01",DateEnd:"2015-09-11",DateUntil:"2015-09-11",RegionCode:""};
                    array = {DateStart: dateStart, DateEnd: dateEnd, DateUntil: dateUntil, RegionCode: ""};

                    $.ajax({
                        url: xurl,
                        type: 'POST',
                        data: JSON.stringify(array),
                        contentType: 'application/json; charset=utf-8',
                        dataType: 'json',
                        async: true,
                        crossdomain: true,
                        beforeSend: function () {
                            showLoading();
                        }, complete: function () {
                            hideLoading();
                        }, success: function (data) {

                            $("#contentReport").empty();
                            if (data.successful > 0) {
                                var show = "";
                                show += "<div id='divClasification'>";
                                var cont = 0;
                                $(data.report).each(function (index, value) {

                                    var StoreName = value.StoreName;
                                    var AcumulateSale = value.AcumulateSale;
                                    var AcumulateGoal = value.AcumulateGoal;

                                    /**convert data to Float to resolve**/
                                    var d_AcumulateGoal = parseFloat(AcumulateGoal);
                                    var d_AcumulateSale = parseFloat(AcumulateSale);

                                    /****/

                                    var alcance_objetivo = 100 - (d_AcumulateGoal - d_AcumulateSale);//100-(A-B)



                                    if (state_clasification == "1") {
                                        var s_clasification = "";
                                        var color = "";
                                        if (alcance_objetivo > muy_buena) {
                                            s_clasification = "Very Good";
                                            color = "veryGood";
                                        }
                                        if (alcance_objetivo > inf_buena && alcance_objetivo <= sup_buena) {
                                            s_clasification = "Good";
                                            color = "good";
                                        }
                                        if (alcance_objetivo > inf_aceptable && alcance_objetivo <= sup_aceptable) {
                                            s_clasification = "Acceptable";
                                            color = "acceptable";
                                        }
                                        if (alcance_objetivo > inf_deficiente && alcance_objetivo <= sup_deficiente) {
                                            s_clasification = "Deficiente";
                                            color = "deficient";
                                        }
                                        if (alcance_objetivo > inf_critico && alcance_objetivo <= sup_critico) {
                                            s_clasification = "Critical";
                                            color = "critical";
                                        }
                                        if (alcance_objetivo <= muy_critico) {
                                            s_clasification = "Very Critical";
                                            color = "veryCritical";
                                        }
                                        show += "<div class='store clasification' id='" + color + "' >";
                                        show += "<h1>" + StoreName + "</h1>";
                                        show += "<p id='" + color + index + "' >" + s_clasification + "</p>";
                                        show += "<i class='lblScope" + index + "' >Scope:</i>";
                                        show += "<span class='percentage'>" + alcance_objetivo.toFixed(2) + "%</span>";
                                        show += "</div>";
                                        show += "<hr>";



                                    } else if (state_clasification == "2") {

                                        if (alcance_objetivo > muy_buena) {
                                            show += "<div class='store clasification' id='veryGood'>";
                                            show += "<h1>" + StoreName + "</h1>";
                                            show += "<p id='veryGood" + index + "'>Very Good</p>";
                                            show += "<i class='lblScope" + index + "'>Scope:</i>";
                                            show += "<span class='percentage'>" + alcance_objetivo.toFixed(2) + "%</span>";
                                            show += "</div>";
                                            show += "<hr>";

                                        }


                                    } else if (state_clasification == "3") {
                                        if (alcance_objetivo > inf_buena && alcance_objetivo <= sup_buena) {

                                            show += "<div class='store clasification' id='good'>";
                                            show += "<h1>" + StoreName + "</h1>";
                                            show += "<p id='good" + index + "'>Good</p>";
                                            show += "<i class='lblScope" + index + "'>Scope:</i>";
                                            show += "<span class='percentage'>" + alcance_objetivo.toFixed(2) + "%</span>";
                                            show += "</div>";
                                            show += "<hr>";
                                        }

                                    } else if (state_clasification == "4") {
                                        if (alcance_objetivo > inf_aceptable && alcance_objetivo <= sup_aceptable) {
                                            show += "<div class='store clasification' id='acceptable' >"
                                            show += "<h1>" + StoreName + "</h1>";
                                            show += "<p id='acceptable" + index + "'>Acceptable</p>";
                                            show += "<i class='lblScope" + index + "'>Scope:</i>";
                                            show += "<span class='percentage'>" + alcance_objetivo.toFixed(2) + "%</span>";
                                            show += "</div>";
                                            show += "<hr>";
                                        }

                                    } else if (state_clasification == "5") {
                                        if (alcance_objetivo > inf_deficiente && alcance_objetivo <= sup_deficiente) {
                                            show += "<div class='store clasification'  id='deficient'>";
                                            show += "<h1>" + StoreName + "</h1>";
                                            show += "<p id='deficient" + index + "'>Deficient</p>";
                                            show += "<i class='lblScope" + index + "'>Scope:</i>";
                                            show += "<span class='percentage'>" + alcance_objetivo.toFixed(2) + "%</span>";
                                            show += "</div>";
                                            show += "<hr>";
                                        }

                                    } else if (state_clasification == "6") {
                                        if (alcance_objetivo > inf_critico && alcance_objetivo <= sup_critico) {
                                            show += "<div class='store clasification'   id='critical' >";
                                            show += "<h1>" + StoreName + "</h1>";
                                            show += "<p id='critical" + index + "'>Critical</p>";
                                            show += "<i class='lblScope" + index + "'>Scope:</i>";
                                            show += "<span class='percentage'>" + alcance_objetivo.toFixed(2) + "%</span>";
                                            show += "</div>";
                                            show += "<hr>";
                                        }

                                    } else if (state_clasification == "7") {
                                        if (alcance_objetivo <= muy_critico) {
                                            show += "<div class='store clasification'  id='veryCritical'>";
                                            show += "<h1>" + StoreName + "</h1>";
                                            show += "<p id='veryCritical" + index + "'>Very Critical</p>";
                                            show += "<i class='lblScope" + index + "'>Scope:</i>";
                                            show += "<span class='percentage'>" + alcance_objetivo.toFixed(2) + "%</span>";
                                            show += "</div>";
                                            show += "<hr>";

                                        }
                                    }
                                    cont = index;
                                });

                                show += "</div>";
                                $('#contentReport').append(show);

                                for (var i = 0; i <= cont; i++) {
                                    lang = navigator.language.split("-");
                                    current_lang = (lang[0]);

                                    if (current_lang == 'es') {

                                        $("#veryGood" + i).text("Muy bueno");
                                        $("#good" + i).text("Bueno");
                                        $("#acceptable" + i).text("Aceptable");
                                        $("#deficient" + i).text("Deficiente");
                                        $("#critical" + i).text("Critico");
                                        $("#veryCritical" + i).text("Muy Critico");
                                        $(".lblScope" + i).text("Alcance:");
                                    }
                                }
                                henry2();


                            }

                        }, error: function (xhr, ajaxOptions, thrownError) {
                            console.log(xhr.status);
                            console.log(xhr.statusText);
                            console.log(xhr.responseText);
                            hideLoading();
                            if (current_lang == 'es')
                                mostrarModalGeneral("Error de Conexión");
                            else
                                mostrarModalGeneral("No Connection");
                        }

                    });

                });
            });



        });
    });
    /*******************************/
}

function deteclenguage2() {
    lang = navigator.language.split("-");
    current_lang = (lang[0]);

    if (current_lang == 'es') {

        MSG_TITLE_STORE_CLASIFICATION_2();
        MSG_TITLE_ALL_REGION_2();
        MSG_RETURN_2();

        MSG_TITLE_OPTIONS_2();

        MSG_TITLE_OPTIONS_22();
        MSG_CHOOSE_RANGE_2();

        MSG_CALEN_VERYGOOD_2();
        MSG_CALEN_GOOD_2();
        MSG_CALEN_ACCEPTABLE_2();
        MSG_CALEN_DEFICIENT_2();
        MSG_CALEN_CRITICAL_2();
        MSG_CALEN_VERYCRITICAL_2();

        MSG_CANCEL_2();
        MSG_OK_2();

        MSG_DATE_START_2();
        MSG_DATE_END_2();

        MSG_CHOOSE_DATE_COMPARE_2();

        MSG_DATE_COMPARE_2();

        MSG_BACK_2();

        MSG_INFORMATION_2();
        MSG_CHOOSE_CLASIFICATION_2();
        MSG_ALL_CLASIFICATION_2();
        MSG_VERY_GOOD_2();

        MSG_GOOD_2();

        MSG_ACCEPTABLE_2();

        MSG_DEFICIENT_2();

        MSG_CRITICAL_2();
        MSG_VERY_CRITICAL_2();
    }
}