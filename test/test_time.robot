*** Settings ***
Library  SeleniumLibrary
Library  DateTime

*** Test Cases ***
Get Date and Time
                            ${TIME}     get time
    Log to console          ${TIME}
                            ${DATE}     get current date
    Log to console          ${DATE}
                            ${Result_DATE}      Convert Date    ${DATE}     result_format=%d/%m/%Y %H:%M:%S
    Log to console          ${Result_DATE}
    Set Global Variable     ${DATE}

Wow
    Open Browser    https://robotframework.org/     Chrome
    Maximize Browser Window
    # Set Selenium Speed      0.2
    Log to console      ${DATE}
    Close Browser