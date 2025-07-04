//===============================================//
// MODULE NAME   : RFC Admission Portal
// PAGE NAME     : Default / Login
// CREATION DATE : 15-04-2023
// CREATED BY    : Gaurav K
// Modified BY   :
// Modified Date :
//===============================================//

//======================== Browser validation JS ===============================//
$(document).ready(function () {
    'use strict';

    var module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);

            return { os: os, browser: browser };
        },
        matchItem: function (string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;

            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };

    var e = module.init(),
        debug = '';

    // debug += 'os.name = ' + e.os.name + '<br/>';
    //  debug += 'os.version = ' + e.os.version + '<br/>';
    debug += 'browser.name = ' + e.browser.name + '<br/>';

    if ((e.browser.name) == 'Chrome') {
        if ((e.browser.version) >= 70) {
            //    alert('You are using Updated Browser')
        }
        else {
            alert("The current version of your browser is not compatible, please update your browser.");
            setTimeout(function () {
                window.location.href = "https://www.google.com/chrome/";
            }, 300);
        }
    }

    if ((e.browser.name) == 'Firefox') {
        if ((e.browser.version) >= 65) {
            //    alert('You are using Updated Browser')
        }
        else {
            alert("The current version of your browser is not compatible, please update your browser.");
            setTimeout(function () {
                window.location.href = "https://www.mozilla.org/en-US/firefox/download/thanks/?scene=2#download-fx";
            }, 300);
        }
    }

    if ((e.browser.name) == 'Internet Explorer') {
        if ((e.browser.version) >= 10) {
            // alert('You are using Updated Browser')
        }
        else {
            alert("The current version of your browser is not compatible, please update your browser.");
            setTimeout(function () {
                window.location.href = "https://www.microsoft.com/en-in/download/internet-explorer.aspx";
            }, 300);
        }
    }
    debug += 'browser.version = ' + e.browser.version + '<br/>';
    debug += '<br/>';
    //    debug += 'navigator.userAgent = ' + navigator.userAgent + '<br/>';
    //   debug += 'navigator.appVersion = ' + navigator.appVersion + '<br/>';
    //  debug += 'navigator.platform = ' + navigator.platform + '<br/>';
    //  debug += 'navigator.vendor = ' + navigator.vendor + '<br/>';
    //  document.getElementById('log').innerHTML = debug;
});
//======================== Browser validation JS ===============================//


//======================== Captcha JS Start ================================//
//$(document).ready(function () {
//    let captchaText = document.querySelector('#captcha');
//    let userText = document.querySelector('#captchatextBox');
//    let refreshButton = document.querySelector('#refresh');

//    //  let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//    let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//    let emptyArr = [];
//    for(let i = 1; i <= 5; i++) {
//        emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
//    }
//    captchaText.innerHTML = emptyArr.join('');

//    refreshButton.addEventListener('click', function () {
//        userText.value = "";
//        let refreshArr = [];
//        for(let j = 1; j <= 5; j++) {
//            refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
//        }
//        captchaText.innerHTML = refreshArr.join('');
//    });
//});

//function ValidateCapcha()
//{
//    
//    let userText = document.querySelector('#captchatextBox');
//    let captchaText = document.querySelector('#captcha');

//    let userInput = userText.value;
//    if (userInput.toUpperCase() !== captchaText.innerHTML) {
//        if (userInput.toUpperCase() !== "SMART") {
//            //alert("Login Failed !, Captcha is not matched !");
//            Swal.fire({
//                html: 'Login Failed !, Captcha is not matched !',
//                icon: 'warning'
//            });
//            return false;
//        }
//    }
//}
//========================== Captcha JS END ============================//

//========================== Math Captcha JS Start ============================//
$(document).ready(function () {
    var hardcodedCaptcha;
    // ADD FUNCTION GETCAPTCHACODE() AND HARDCODEDCAPTCHA FOR TICKET-3442 BY KETAN BELE 03-05-2024
    function GetCaptchaCode() {

        $.ajax({
            url: '/default.aspx/GetCaptchaCode',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                hardcodedCaptcha = response.d;
            },
            error: function (xhr, status, error) {
            }
        });
    }

    GetCaptchaCode();
    var a, b, c,
        submitContent,
        captcha,
        locked,
        validSubmit = false,
        timeoutHandle;

    function generateCaptcha() {
        a = Math.ceil(Math.random() * 100);
        b = Math.ceil(Math.random() * 10);
        c = a + b;
        submitContent = '<span>' + a + '</span> + <span>' + b + '</span>' +
            ' = <input class="submit__input" type="text" maxlength="3" size="3" tabindex="3"/>';
        $('.submit__generated').html(submitContent);
        init();
    }
    function unlock() {
        locked = false;
    }

    $('.ref-refresh').on('click', function () {

        if (!locked) {
            locked = true;
            setTimeout(unlock, 1);
            generateCaptcha();
            //setTimeout(checkCaptcha, 0);
        }
    });

    $('#btnSubmit').on('click', function (e) {
        var txt_username_value = $('#txt_username').val();
        var txt_password_value = $('#txt_password').val();
        var captchaValue = $('.submit__input').val();
        var alertShown = false;
        if (!txt_username_value.trim() && !txt_password_value.trim() && $('.submit__input').val() === '') {
            alert("Please Enter User Name !!!.\nPlease Enter Password !!!. \nPlease Enter Captcha !!!.");
            alertShown = true;
            return false;
        }
        if (!txt_password_value.trim() && $('.submit__input').val() === '') {
            alert("Please Enter Password !!!. \nPlease Enter Captcha !!!.");
            alertShown = true;
            return false;
        }
        if (!txt_username_value.trim() && $('.submit__input').val() === '') {
            alert("Please Enter User Name !!!. \nPlease Enter Captcha !!!.");
            alertShown = true;
            return false;
        }
        if (!txt_username_value.trim() && !txt_password_value.trim()) {
            alert("Please Enter User Name !!!.\nPlease Enter Password !!!.");
            alertShown = true;
            return false;
        }
        if (!txt_username_value.trim()) {
            alert("Please Enter User Name !!!.");
            alertShown = true;
            return false;
        }
        if (!txt_password_value.trim()) {
            alert("Please Enter Password !!!.");
            alertShown = true;
            return false;
        }
        if ($('.submit__input').val() === '') {
            alert("Please Enter captcha !!!.");
            alertShown = true;
            return false;
        }
        if (alertShown == true) {
            return false;
        }

        e.preventDefault();
        var isValid = checkCaptcha();
        if (isValid) {
            __doPostBack('btnSubmit', '');
        } else {
            Swal.fire({
                html: 'Login Failed! Captcha is not matched!',
                icon: 'warning'
            });
            generateCaptcha();
            return false;
        }
    });
    // ADD * CAPTCHA === HARDCODEDCAPTCHA * FOR TICKET-3442 BY KETAN BELE
    function checkCaptcha() {
        if (captcha === c || captcha === hardcodedCaptcha) {
            $('.submit__generated').removeClass('unvalid').addClass('valid');
            $('.submit').removeClass('overlay');
            $('.submit__overlay').fadeOut('fast');
            $('.submit__error').addClass('d-none');
            $('.submit__error--empty').addClass('d-none');
            validSubmit = true;
        } else {
            if (captcha === '') {
                $('.submit__error').addClass('d-none');
                $('.submit__error--empty').removeClass('d-none');
            } else {
                $('.submit__error').removeClass('d-none');
                $('.submit__error--empty').addClass('d-none');
            }
            $('.submit__generated').removeClass('valid').addClass('unvalid');
            $('.submit').addClass('overlay');
            $('.submit__overlay').fadeIn('fast');
            validSubmit = false;
        }
        return validSubmit;
    }

    function init() {
        $('form').on('submit', function (e) {
            e.preventDefault();
            if ($('.submit__generated').hasClass('valid')) {
                captcha = $('.submit__input').val();
                if (captcha !== '') {
                    captcha = Number(captcha);
                }

                checkCaptcha();

                if (validSubmit === true) {
                    validSubmit = false;
                    submitted();
                }
            } else {
                return false;
            }
        });

        $('.submit__input').on('propertychange change keyup input paste', function () {
            window.clearTimeout(timeoutHandle);
            timeoutHandle = window.setTimeout(function () {
                captcha = $('.submit__input').val();
                if (captcha !== '') {
                    captcha = Number(captcha);
                }
                checkCaptcha();
            }, 150);
        });
        $('.submit__input').on('input', function () {
            var input = $(this);
            var value = input.val();
            var sanitizedValue = value.replace(/\D/g, '');
            input.val(sanitizedValue);
            // checkCaptcha();
        });

        $('body').on('keydown', function (e) {
            if (e.which === 13) {
                if ($('.submit').hasClass('overlay')) {
                    checkCaptcha();
                } else {
                    $('.submit').addClass('enter-press');
                }
            }
        }).on('keyup', function (e) {
            if (e.which === 13) {
                $('.submit').removeClass('enter-press');
            }
        });
    }
    generateCaptcha();
    return false;
});
//========================== Math Captcha JS END ============================//

$(document).ready(function () {
    //----------------- Validation JS ----------------------//
    function validate() {
        $("#txt_emailid").val('');
        $("#txtPassword").val('');
        $("#txtOtp").val('');
    }

    //================= Show Hide Password ====================//
    $("#show_hide_password a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("bi-eye-slash");
            $('#show_hide_password i').removeClass("bi-eye");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("bi-eye-slash");
            $('#show_hide_password i').addClass("bi-eye");
        }
    });

    //================= Show Hide Password For Forgot Password ====================//
    $("#DivForgotPassword a").on('click', function (event) {
        event.preventDefault();
        if ($('#DivForgotPassword input').attr("type") == "text") {
            $('#DivForgotPassword input').attr('type', 'password');
            $('#DivForgotPassword i').addClass("bi-eye-slash");
            $('#DivForgotPassword i').removeClass("bi-eye");
        } else if ($('#DivForgotPassword input').attr("type") == "password") {
            $('#DivForgotPassword input').attr('type', 'text');
            $('#DivForgotPassword i').removeClass("bi-eye-slash");
            $('#DivForgotPassword i').addClass("bi-eye");
        }
    });

    //==============================================================================================================//
    //==============================================================================================================//
    //==========================================     Var Paramater JS    ===========================================//
    //==============================================================================================================//
    //==============================================================================================================//
    var parameter = Sys.WebForms.PageRequestManager.getInstance();
    parameter.add_endRequest(function () {
        //================= Show Hide Password For Forgot Password ====================//
        $("#DivForgotPassword a").on('click', function (event) {
            event.preventDefault();
            if ($('#DivForgotPassword input').attr("type") == "text") {
                $('#DivForgotPassword input').attr('type', 'password');
                $('#DivForgotPassword i').addClass("bi-eye-slash");
                $('#DivForgotPassword i').removeClass("bi-eye");
            } else if ($('#DivForgotPassword input').attr("type") == "password") {
                $('#DivForgotPassword input').attr('type', 'text');
                $('#DivForgotPassword i').removeClass("bi-eye-slash");
                $('#DivForgotPassword i').addClass("bi-eye");
            }
        });

    });
});
