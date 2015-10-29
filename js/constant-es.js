/*************INDEX**********/
function MSG_INSERT_ADDRESS_SERVER() {
    $("#lblmsg1").html("Ingrese la dirección IP del Servidor");
}

function MSG_PORT() {
    $("#lblmsg2").html("Puerto: ");
}

function MSG_ALIAS() {
    $("#lblmsg3").html("Alias: ");
}

function MSG_SITE() {
    $("#lblmsg4").html("Sitio: ");
}

function MSG_RETURN() {
    $("#txtpreferences_index").html("Atrás");
}


function MSG_GO() {
    var lang = navigator.language.split("-");
    var current_lang = (lang[0]);
    if (current_lang == 'es')
        $("#btnenter").val("Ingresar");
    else
        $("#btnenter").val("Ok");
}
// Errores Index
function MSG_CONNECTION_FAILURE() {
    if (current_lang == 'es')
        return $("#").html("Fallo de Conexion");
    else
        return $("#").html("Error Conection");
}

function MSG_INVALID_IP() {
    $("#").html("IP Invalida");
}
/**********************/


/*************LOGIN*********/
function MSG_NUMBER_PIN() {
    $("#lbllmsg1").html("Ingrese su número Pin de empleado");
}
function MSG_REMEMBER_PIN() {
    $("#checktext").html("Recordar PIN");
}
function MSG_BACK_LOGIN() {
    $("#txtback_login").html("Atrás");
}
function BTN_LOGIN() {
    $("#btnlogin").val("Entrar");
}



/*****************************/

/****************MENU*************/
function MSG_LBL_MAINTITLE() {
    $(".isotipo").text("RCS iReports");
}
function MSG_LBL_GVS() {
    $("#lblgvst").html("Metas vs Ventas");
}
function MSG_LBL_SC() {
    $("#lblgvst_r2").html("Clasificación por Tienda");
}
function MSG_LBL_SC_D() {
    $("#lblgvsd_r2").html("Clasificación personalizado por Tienda");
}

function MSG_LBL_PP() {
    $("#lblgvst_r3").html("Porcentaje de Progreso");
}

function MSG_LBL_PP_D() {
    $("#lblgvsd_r3").html("El progreso de ventas por tienda");
}

function MSG_LBL_GVS_D() {
    $("#lblgvsd").html("Compare sus metas vs ventas en tiempo real");
}
function MSG_LBL_WORKING() {
    $("#lblworkd").html("Más Reportes Proximamente...");
}
//Modal Menu
function MSG_LBL_CHANGE_ALIAS_T() {
    $("#lblchangealit").html("Seleccione Alias");
}
function MSG_LBL_CHANGE_ALIAS_BUTTON() {
    $("#add_alias").html("Añadir Alias");
}
function MSG_LBL_CHANGE_ALIAS_CONFIRM() {
    $("#lblchangealic").html("¿Desea cambiar de Servidor?");
}
function MSG_LBL_DELETE_SERVER_MESSAGE() {
    $("#lbldeleteser").html("¿Desea eliminar este Servidor?");
}
function MSG_LBL_CHANGE_ALIAS_CONFIRM_SI() {
    $("#btnsi").html("Si");
    $("#btnsidelete").html("Si");
}

/******************************/


/**********STORES************/
function BTN_PREFERENCES_TXT() {
    $('#txtpreferences').html("Retornar");
    $('#txtpreferences_title').html("Preferencias");
}
function BTN_REFRESH() {
    $('#storetitle').html("Metas vs Ventas");
}
function OPT_COMBO_GENERAL() {
    $('.select-general .init p').html("Por Compañia");
    $('.select-general .item:nth-child(2) p').html("Por Compañia");
    $('.select-general .item:nth-child(3) p').html("Por Región");
    $('.select-general .item:nth-child(4) p').html("Por Tienda");
}
function OPT_COMBO_DATE() {
    $('.select-date .init p').html("Hoy");
    $('.select-date .item:nth-child(2) p').html("Hoy");
    $('.select-date .item:nth-child(3) p').html("Ayer");
    $('.select-date .item:nth-child(4) p').html("Inicio de Semana");
    $('.select-date .item:nth-child(5) p').html("Inicio de Mes");
    $('.select-date .item:nth-child(6) p').html("Inicio de Año");
}
function OPT_COMBO_STORES() {
    $('.select-region .init p').html("Seleccione Región");
    $('.select-region .item:nth-child(2) p').html("Seleccione Región");
}
//Preferences
function BTN_BACK() {
    $('#exit span').html("Regresar");
}
function MSGS_VISUALIZATION() {
    $('.changeView span').html("Visualización");
    $('.checkbox_view .current').html("Mostrar Actual");
    $('.checkbox_view .global').html("Mostrar Global");
}
function MSGS_ORDER() {
    $('.changeOrden span').html("Ordenar por");
    $('.checkbox_view #txtchksales').html("Ventas");
    $('.checkbox_view #txtchkgoals').html("Metas");
}


//Modal Stores
function MSG_DICT_TITLE() {
    $('#lblmodaldicc').html("Diccionario");
}
function MSG_SHORTCUTS() {
    $('#show_info .modal-body div:nth-child(1) div').html("MH:");
    $('#show_info .modal-body div:nth-child(2) div').html("VH:");
    $('#show_info .modal-body div:nth-child(3) div').html("MA:");
    $('#show_info .modal-body div:nth-child(4) div').html("VA:");
    $('#show_info .modal-body div:nth-child(5) div').html("MS:");
    $('#show_info .modal-body div:nth-child(6) div').html("VS:");
    $('#show_info .modal-body div:nth-child(7) div').html("MM:");
    $('#show_info .modal-body div:nth-child(8) div').html("VM:");
    $('#show_info .modal-body div:nth-child(9) div').html("MA:");
    $('#show_info .modal-body div:nth-child(10) div').html("VA:");
    $('#show_info .modal-body div:nth-child(11) div').html("MAC:");
    $('#show_info .modal-body div:nth-child(12) div').html("VAH:");
    $('#show_info .modal-body div:nth-child(1) span').html("Meta de Hoy");
    $('#show_info .modal-body div:nth-child(2) span').html("Venta de Hoy");
    $('#show_info .modal-body div:nth-child(3) span').html("Meta de Ayer");
    $('#show_info .modal-body div:nth-child(4) span').html("Venta de Ayer");
    $('#show_info .modal-body div:nth-child(5) span').html("Meta Semana a Hoy");
    $('#show_info .modal-body div:nth-child(6) span').html("Venta Semana a Hoy");
    $('#show_info .modal-body div:nth-child(7) span').html("Meta Mes a Hoy");
    $('#show_info .modal-body div:nth-child(8) span').html("Venta Mes a Hoy");
    $('#show_info .modal-body div:nth-child(9) span').html("Meta Año a Hoy");
    $('#show_info .modal-body div:nth-child(10) span').html("Venta Año a Hoy");
    $('#show_info .modal-body div:nth-child(11) span').html("Meta Año Completo");
    $('#show_info .modal-body div:nth-child(12) span').html("Venta Año a Hoy");
}
function BTN_OK() {
    $('#btnok').html("Aceptar");
}
/*****************************/


/*******MODAL_MENU_NEW_SERVER*****/

function MSG_TITLE_SELECT_ALIAS() {
    $('#').html("Seleccione su Alias");
}
function MSG_BTN_ADDALIAS() {
    $('#').html("Nuevo Alias");
}
/********************************************************/
/****************** REPORTE1**************************/
function MSG_COMPANY_1() {
    $('#filterGeneral').text("Por Compañia");
}
function MSG_LBL_COMPANY_1() {
    $('#lbl_By_company').text("Por Compañia");
}
function MSG_LBL_REGION_1() {
    $('#lbl_By_region').text("Por Región");
}
function MSG_LBL_STORE_1() {
    $('#lbl_By_Store').text("Por Tienda");
}
function MSG_TXT_TITLE_1() {
    $('#top_txt_title').text("Opciones");
}
function MSG_SPN_HEADER_1() {
    $('#section_header').text("Elegir Filtros");
}
function MSG_SPN_TITLE_1() {
    $('#txt_title').text("Metas vs Ventas");
}
function MSG_LBL_MODAL_DIC_1() {
    $('#lblmodaldicc').html("Diccionario");
}
function MSG_LBL_DET_DIC_1(){
    $('#TodayGoal').text("MH:");
    $('#TodaySale').text("VH:");
    $('#YesterdayGoal').text("MA:");
    $('#YesterdaySale').text("VA:");
    $('#WeekGoal').text("MS:");
    $('#WeekSale').text("VS:");
    $('#MonthGoal').text("MM:");
    $('#MonthSale').text("VM:");
    $('#AnnualGoal').text("MA:");
    $('#AnnualSale').text("VA:");
    $('#CompleteYearGoal').text("MAC:");
    $('#CompleteYerSale').text("VAH:");
}

function MSG_RPT_TG_1() {
    $('#report1TG').text("Meta de Hoy");
}
function MSG_RPT_TS_1() {
    $('#report1TS').text("Venta de Hoy");
}
function MSG_RPT_YG_1() {
    $('#report1YG').text("Meta de Ayer");
}
function MSG_RPT_YS_1() {
    $('#report1YS').text("Venta de Ayer");
}
function MSG_RPT_WG_1() {
    $('#report1WG').text("Meta Semana a Hoy");
}
function MSG_RPT_WS_1() {
    $('#report1WS').text("Venta Semana a Hoy");
}
function MSG_RPT_MG_1() {
    $('#report1MG').text("Meta Mes a Hoy");
}
function MSG_RPT_MS_1() {
    $('#report1MS').text("Venta Mes a Hoy");
}
function MSG_RPT_AG_1() {
    $('#report1AG').text("Meta Año a Hoy");
}
function MSG_RPT_AS_1() {
    $('#report1AS').text("Venta Año a Hoy");
}
function MSG_RPT_CG_1() {
    $('#report1CG').text("Meta Año Completo");
}
function MSG_RPT_CS_1() {
    $('#report1CS').text("Venta Año Completo");
}
function MSG_MODAL_OK_1() {
    $('#btnok').text("Aceptar");
}
function MSG_BACK_1() {
    $('#txtBack').text("Atrás");
}
function MSG_CHOOSEDATE_1() {
    $('#lblChooseDate').text("Elegir una Fecha");
}
function MSG_TODAY_1() {
    $('#lblToday').text("Hoy");
}
function MSG_YESTERDAY_1() {
    $('#lblYesterday').text("Ayer");
}
function MSG_WEEK_1() {
    $('#lblWeek').text("Inicio de Semana");
}
function MSG_MONTH_1() {
    $('#lblMonth').text("Inicio de Mes");
}
function MSG_YEAR_1() {
    $('#lblYear').text("Inicio de Año");
}
function MSG_VISUALIZATION_1() {
    $('#lblVisualization').text("Visualización");
}
function MSG_SHOWCURRENT_1(){
    $('.text-checkbox.current').text("Show Actual");
}
function MSG_SHOWGLOBAL_1(){
    $('.text-checkbox.global').text("Show Global");
}
function MSG_TODAYP_1(){
    $('#lblTodayP').text("Hoy");
}

/************REPORTE 2  *******************/

function MSG_TITLE_STORE_CLASIFICATION_2() {
    $('#refresh').text("Clasificación por tienda");
}

function MSG_TITLE_OPTIONS_2() {
    $("#txt_title").text("Clasificación por tienda");
}

function MSG_RETURN_2() {
    $("#txtReturn").text("Retornar");
}

function MSG_TITLE_OPTIONS_22() {
    $("#txt_title2").text("Opciones");
}

function MSG_TITLE_ALL_REGION_2() {
    $("#filterClasification").text("Todas las Clasificaciones");
}

function MSG_CHOOSE_RANGE_2() {
    $("#lblChooseRange").text("Elegir rango");
}

function MSG_DATE_START_2() {
    $("#lbldateStart").text("Fecha de inicio");
}

function MSG_DATE_END_2() {
    $("#lbldateEnd").text("Fecha de fin");
}

function MSG_CHOOSE_DATE_COMPARE_2() {
    $("#lblChooseCompare").text("Elegir fecha de comparación");
}

function MSG_DATE_COMPARE_2() {
    $("#lbldateToCompare").text("Fecha de comparación");
}

function MSG_BACK_2() {
    $("#txtback").text("Atrás");
}

function MSG_INFORMATION_2() {
    $("#lblinformation").text("Información");
}

function MSG_CHOOSE_CLASIFICATION_2() {
    $("#lblChooseClasification").text("Eligir Clasificación");
}

function MSG_ALL_CLASIFICATION_2() {
    $("#lblAllClasification").text("Todas las Clasificaciones");
}

function MSG_VERY_GOOD_2() {
    $("#lblVeryGood").text("Muy bueno");
}

function MSG_CALEN_VERYGOOD_2() {
    $("#clblVeryGood").text("Muy bueno");
}
function MSG_CALEN_GOOD_2() {
    $("#clblGood").text("Bueno");
}

function MSG_CALEN_ACCEPTABLE_2() {
    $("#clblAcceptable").text("Aceptable");
}
function MSG_CALEN_DEFICIENT_2() {
    $("#clblDeficient").text("Deficiente");
}

function MSG_CALEN_CRITICAL_2() {
    $("#clblCritical").text("Critico");
}

function MSG_CALEN_VERYCRITICAL_2() {
    $("#clblVeryCritical").text("Muy crítico");
}


function MSG_CANCEL_2() {
    $(".btn.btn-modal.left").text("Cancelar");
}

function MSG_OK_2() {
    $(".btn.btn-modal.right").text("Aceptar");
}

function MSG_GOOD_2() {
    $("#lblGood").text("Bien");
}
function MSG_ACCEPTABLE_2() {
    $("#lblAcceptable").text("Aceptable");
}

function MSG_DEFICIENT_2() {
    $("#lblDeficient").html("Deficiente");
}

function MSG_CRITICAL_2() {
    $("#lblCritical").text("Crítico");
}
function MSG_VERY_CRITICAL_2() {
    $("#lblVeryCritical").text("Muy crítico");
}


/*******************************************/

/**************REPORTE3***************/
function MSG_LBL_PROGRESS_BY_STORE_3() {
    $("#refresh").text("Progreso por Tienda");
}

function MSG_RETURN_3() {
    $("#txtpreferences").text("Retornar");
}

function MSG_BACK_3() {
    $("#txtBack").text("Atrás");
}


function MSG_CHOOSE_RANGE_3() {
    $("#lblChooseRange").text("Elegir rango");
}

function MSG_DATE_START_3() {
    $("#lbldateStart").text("Fecha de inicio");
}
function MSG_DATE_END_3() {
    $("#lbldateEnd").text("Fecha de fin");
}

function MSG_CHOOSE_DATE_COMPARE_3() {
    $("#lblChooseCompare").text("Elegir fecha de comparación");
}

function MSG_DATE_COMPARE_3() {
    $("#lbldateToCompare").text("Fecha de comparación");
}

function MSG_DICTIONARY_3() {
    $("#lblmodaldicc").text("Diccionario");
}

function MSG_TOTALMONTHGOAL_3() {
    $("#lblTotalMonthGoal").text("Meta total del mes por tienda");
}

function MSG_TOTALGOALSTORE_3() {
    $("#lblTotalGoalAll").text("Meta total del mes por tienda");
}

function MSG_TEXT_ACUMULATE_PECENT_SALE_3() {
    $("#lblAcumulatePercentSale").text("Procentaje acumulado de ventas");
}
function MSG_TEXT_ACUMULATE_PERCENT_GOAL_3() {
    $("#lblAcumulatePercentGoal").text("Procentaje acumulado de metas");
}
function MSG_TEXT_OPTIONS_3() {
    $("#txt_Options").text("Opciones");
}

function MSG_TEXT_OK_3() {
    $("#txt_ok").text("Aceptar");
}

function MSG_TEXT_CHOOSE_REGION_3() {
    $("#txt_choose_region").text("Elegir Región");
}


/*****************************************************/

/***********************OPTIONS MENU REPORT 4***************************/

function MSG_LBL_TITLE_MENU_R4() {
    $('#lblgvst_r4').html("Gráfico Avanzado");
}

function MSG_LBL_TITLE_MENU_DETAIL_R4() {
    $("#lblgvsd_r4").html("Visualiza ventas, metas y punto de equilibrio graficamente");
}

function MSG_TITLE_DIALOGSTORE_R4() {
    $("#title_store_menu_r4").html("Elija su tienda");
}

function MSG_OK_R4() {
    $("#btnStore").html("Aceptar");
}

function MSG_CHOOSE_RANGE_4() {
    $("#lblChooseRange").text("Elegir rango");
}
function MSG_OPTIONS_4() {
    $("#lbl_Options").text("Opciones");
}
function MSG_BACK_4() {
    $("#lblBack").text("Atrás");
}
function MSG_CHOOSE_MARGEN_4(){
    $("#lblChooseMargen").text("Elegir margen");
}
function MODAL_R4(){
    $("#lblEnterMargen").text("Introduzca el Margen");
    $("#lblMargenValue").text("Valor de Margen");
    $("#lblCancel").text("Cancelar");
    $("#lblOk").text("Aceptar");
}

/***********************OPTIONS MENU REPORT 5***************************/

function MSG_LBL_TITLE_MENU_R5() {
    $('#lblgvst_r5').text("Alcance de Meta");
}

function MSG_LBL_TITLE_MENU_DETAIL_R5() {
    $("#lblgvsd_r5").text("Mira y compara el progreso de venta por empleado");
}

function MSG_TITLE_DIALOGSTORE_R5() {
    $("#title_store_menu_r5").text("Elija su tienda");
}

function MSG_OK_R5() {
    $("#btnStore5").text("Aceptar");
}




/***********************************************************/
/******************MENU REPORT 4**********************/

function MSG_LBL_RETURN_R4() {
    $("#txtpreferences_r4").html("Retornar");
}

function MSG_DATE_START_R4() {
    $("#lblDateStart_r4").html("Fecha Inicio");
}
function MSG_DATE_END_R4() {
    $("#lblDateEnd_r4").html("Fecha Fin");
}
function MSG_SALES() {
    lang = navigator.language.split("-");
    current_lang = (lang[0]);
    if (current_lang == 'es') {
        return "Venta";
    } else {
        return "Sale";
    }
}
function MSG_GOAL() {
    lang = navigator.language.split("-");
    current_lang = (lang[0]);
    if (current_lang == 'es') {
        return "Meta";
    } else {
        return "Goal";
    }
}
function MSG_BREAKEVEN() {
    lang = navigator.language.split("-");
    current_lang = (lang[0]);
    if (current_lang == 'es') {
        return "Punto Equilibrio";
    } else {
        return "Breakeven";
    }
}
function MSG_TOTAL_GOAL() {
    lang = navigator.language.split("-");
    current_lang = (lang[0]);
    if (current_lang == 'es') {
        return "Meta Total";
    } else {
        return "Total Goal";
    }
}

function MSG_TITLE_DS_R4() {
    $("#title_store_r4").html("Elija su tienda");
}
function MSG_DS_OKR4() {
    $("#btn_ok_r4").html("Aceptar");
}

function MSG_DATESTART_R4() {
    $("#lbldateStartR4").html("Fecha de inicio");
}
function MSG_DATEEND_R4() {
    $("#lbldateEndR4").html("Fecha de fin");
}

function MODAL_ORIENTATION_R4(){
     $("#list_store1").text("Por favor, Gire a la Posición Horizontal");
     $("#title_store_R4").text("Mensaje");
}
/****************************************************/