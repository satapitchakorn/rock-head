*** Settings ***
Library         SeleniumLibrary

*** Variables ***
${URL_form}     http://localhost:4200/form
${URL_log}      http://localhost:4200/log
${URL_init}     https://backend-rockhead.herokuapp.com/api/v1/init

# ${FULL_NAME}    Supachai Uthawisan

*** Keywords ***
Open Browser and get into link
    Open Browser                    ${URL_init}              Chrome
    Go To                           ${URL_form}
    Maximize Browser Window
    # Set Selenium Speed            0.1  
Choose ADD menu for add new user
    Wait Until Page Contains	    Employee information management	
    Click Button                    id:btnAdd
Fill up the details for new user
    [Arguments]                     ${PASSPORT}         ${EMPLOYEE_ID}          ${FIRSTNAME}          ${LASTNAME}           ${POSITION}         ${START_DATE}          ${EMAIL}          ${PHONE}
    Wait Until Page Contains	    EMPLOYEE INFORMATION	
    Select From List By Label       selectPassport      Citizen identity number
    Input Text	                    inputPassport       ${PASSPORT}
    Input Text	                    inputEmployeeId     ${EMPLOYEE_ID}
    Input Text	                    inputFirstname      ${FIRSTNAME}
    Input Text	                    inputLastname       ${LASTNAME}
    Select From List By Label       selectPosition      ${POSITION}
    Input Text	                    inputStartDate      ${START_DATE}
    Input Text	                    inputEmail          ${EMAIL}
    Input Text	                    inputPhone          ${PHONE}
    Click Button                    id:btnSave
    Click Element                   xpath://html/body/div/div/div[3]/button[1]
    Click Element                   xpath://html/body/div/div/div[3]/button[1]
    Wait Until Element Contains	    xpath://html/body/div/div/div[3]/button[1]      OK
    Click Element                   xpath://html/body/div/div/div[3]/button[1]
    Go To                           ${URL_log}
        Sleep                           3
Check the details of new user
   [Arguments]                      ${LOG_ID}       ${EVENT_MESSAGE}        ${FORM_ID}       ${ADMIN_NAME}         
    Wait Until Page Contains	    Logs
    Page Should Contain Element     id:table_log     
    Table Row Should Contain        id:table_log    3   ${LOG_ID}
    Table Row Should Contain        id:table_log    3   ${EVENT_MESSAGE}
    Table Row Should Contain        id:table_log    3   ${FORM_ID}
    Table Row Should Contain        id:table_log    3   ${ADMIN_NAME}
    Log To Console                  ${LOG_ID}
    Log To Console                  ${EVENT_MESSAGE}
    Log To Console                  ${FORM_ID}
    Log To Console                  ${ADMIN_NAME}
        Sleep                           5
Choose MODIFY menu for edit user details
    Open Browser                    ${URL_form}         Chrome
    Wait Until Page Contains	    Employee information management	
    Click Button                    id:btnModify
Edit user details
    [Arguments]                     ${FIRSTNAME}        ${LASTNAME}         ${POSITION}         ${START_DATE}         ${EMAIL}          ${PHONE}
    Wait Until Page Contains        EMPLOYEE INFORMATION
    Wait Until Element Contains     inputPassport       
    Element Should Be Disabled      inputEmployeeId     
    Input Text	                    inputFirstname      ${FIRSTNAME}
    Input Text	                    inputLastname       ${LASTNAME}
    Select From List By Label       selectPosition      ${POSITION}
    Input Text	                    inputStartDate      ${START_DATE}
    Input Text	                    inputEmail          ${EMAIL}
    Input Text	                    inputPhone          ${PHONE}
    Click Button                    id:btnSave
    Wait Until Page Contains        Are you sure?
    Click Button                    id:btnModify
    Click Element                   xpath://html/body/div/div/div[3]/button[1]
    Click Element                   xpath://html/body/div/div/div[3]/button[1]
    Wait Until Element Contains	    xpath://html/body/div/div/div[3]/button[1]      OK
    Click Element                   xpath://html/body/div/div/div[3]/button[1]
    Go To                           ${URL_log}
        Sleep                           3
Check the details of user who was fixed
   [Arguments]                      ${LOG_ID}       ${EVENT_MESSAGE}        ${FORM_ID}       ${ADMIN_NAME}         
    Wait Until Page Contains	    Logs
    Page Should Contain Element     id:table_log     
    Table Row Should Contain        id:table_log    3   ${LOG_ID}
    Table Row Should Contain        id:table_log    3   ${EVENT_MESSAGE}
    Table Row Should Contain        id:table_log    3   ${FORM_ID}
    Table Row Should Contain        id:table_log    3   ${ADMIN_NAME}
    Log To Console                  ${LOG_ID}
    Log To Console                  ${EVENT_MESSAGE}
    Log To Console                  ${FORM_ID}
    Log To Console                  ${ADMIN_NAME}
        Sleep                           5
Choose DELETE menu for change user status to Inactive
    Open Browser                    ${URL_form}         Chrome
    Wait Until Page Contains	    Employee information management	
    Click Button                    id:btnRemove
Change user status to Inactive
    [Arguments]                     ${PASSPORT}         ${EMPLOYEE_ID}          ${FIRSTNAME}        ${LASTNAME}         ${POSITION}         ${START_DATE}         ${EMAIL}          ${PHONE}
    Wait Until Page Contains        EMPLOYEE INFORMATION
    Element Should Be Disabled      inputPassport       ${PASSPORT}
    Element Should Be Disabled      inputEmployeeId     ${EMPLOYEE_ID}
    Element Should Be Disabled      inputFirstname      ${FIRSTNAME}
    Element Should Be Disabled      inputLastname       ${LASTNAME}
    Element Should Be Disabled      inputPosition       ${POSITION}
    Element Should Be Disabled      inputStartDate      ${START_DATE}
    Element Should Be Disabled      inputEmail          ${EMAIL}
    Element Should Be Disabled      inputPhone          ${PHONE}
    Click Button                    id:delete_button
    Wait Until Page Contains        Are you sure?
    Click Button                    id:btnRemove
    Click Element                   xpath://html/body/div/div/div[3]/button[1]
    Click Element                   xpath://html/body/div/div/div[3]/button[1]
    Wait Until Element Contains	    xpath://html/body/div/div/div[3]/button[1]      OK
    Click Element                   xpath://html/body/div/div/div[3]/button[1]
    Go To                           ${URL_log}
        Sleep                           3
Check the user status who was changed
   [Arguments]                      ${LOG_ID}       ${EVENT_MESSAGE}        ${FORM_ID}       ${ADMIN_NAME}         
    Wait Until Page Contains	    Logs
    Page Should Contain Element     id:table_log     
    Table Row Should Contain        id:table_log    3   ${LOG_ID}
    Table Row Should Contain        id:table_log    3   ${EVENT_MESSAGE}
    Table Row Should Contain        id:table_log    3   ${FORM_ID}
    Table Row Should Contain        id:table_log    3   ${ADMIN_NAME}
    Log To Console                  ${LOG_ID}
    Log To Console                  ${EVENT_MESSAGE}
    Log To Console                  ${FORM_ID}
    Log To Console                  ${ADMIN_NAME}
        Sleep                           5
Close Chrome Browser
    Close Browser