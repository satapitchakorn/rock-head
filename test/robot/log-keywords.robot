*** Settings ***
Library         SeleniumLibrary

*** Variables ***
${URL_form}     http://167.99.66.174/form
${URL_log}      http://167.99.66.174/log
${URL_init}     http://167.99.70.176:8080/api/v1/init

# ${FULL_NAME}    Supachai Uthawisan

*** Keywords ***
Open Browser and get into link
    Open Browser                    ${URL_init}          Chrome          
    Go To                           ${URL_form}
    Maximize Browser Window
    # Set Selenium Speed              0.5
Choose ADD menu for add new user
    Wait Until Page Contains	    Employee information management	
    Click Button                    id:btnAdd
Fill up the details for new user
    [Arguments]                     ${PASSPORT}         ${EMPLOYEE_ID}          ${FIRSTNAME}          ${LASTNAME}           ${POSITION}         ${START_DATE}          ${EMAIL}          ${PHONE}
    Wait Until Page Contains	    ADD EMPLOYEE INFORMATION	
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
    Wait Until Page Contains	    Are you sure?
    Click Element                   //button[@class='swal2-confirm swal2-styled']
    Wait Until Page Contains        Successful
    Go To                           ${URL_log}
    Wait Until Page Contains	    Logs                  
Check the details of new user
   [Arguments]                      ${LOG_ID}           ${EVENT_MESSAGE}        ${FORM_ID}       ${ADMIN_NAME}         
    Wait Until Page Contains        Logs                10
    Page Should Contain Element     table_log     
    Table Row Should Contain        table_log    1      ${LOG_ID}
    Table Row Should Contain        table_log    1      ${EVENT_MESSAGE}
    Table Row Should Contain        table_log    1      ${FORM_ID}
    Table Row Should Contain        table_log    1      ${ADMIN_NAME}
Choose MODIFY menu for edit user details
    Go To                           ${URL_form}
    Wait Until Page Contains	    Employee information management
    Click Button                    id:btnModify
Edit user details
    [Arguments]                     ${FIRSTNAME}        ${PHONE}
    Wait Until Element Is Visible   inputPassport       10
    Element Should Be Disabled      selectPassport
    Element Should Be Disabled      inputPassport
    Element Should Be Disabled      inputEmployeeId
    Input Text                      inputFirstname      ${FIRSTNAME}
    Input Text	                    inputPhone          ${PHONE}
    Click Button                    id:btnSave
    Wait Until Page Contains        Are you sure?       
    Click Element                   //button[@class='swal2-confirm swal2-styled']
    Wait Until Page Contains        Successful
    
Check the details of user who was modified
  [Arguments]                       ${LOG_ID}           ${EVENT_MESSAGE}        ${FORM_ID}       ${ADMIN_NAME}         
    Wait Until Page Contains        Logs                10
    Wait Until Element Is Visible   table_log           10
    Table Row Should Contain        table_log    1      ${LOG_ID}
    Table Row Should Contain        table_log    1      ${EVENT_MESSAGE}
    Table Row Should Contain        table_log    1      ${FORM_ID}
    Table Row Should Contain        table_log    1      ${ADMIN_NAME}
Choose DELETE menu for change user status to Inactive
    Go To                           ${URL_form}
    Wait Until Page Contains        Employee information management         10
    Click Button                    btnRemove
Change user status to Inactive
    Wait Until Element Is Visible   inputEmployeeId      10
    Element Should Be Disabled      inputEmployeeId   
    Element Should Be Disabled      inputFirstname     
    Element Should Be Disabled      inputLastname      
    Element Should Be Disabled      selectPosition      
    Element Should Be Disabled      inputStartDate     
    Element Should Be Disabled      inputEmail          
    Element Should Be Disabled      inputPhone         
    Click Button                    id:btnRemove
    Wait Until Page Contains        Are you sure?
    Click Element                   //button[@class='swal2-confirm swal2-styled']
    Wait Until Page Contains        Successful
    Go To                           ${URL_log}
Check the user status who was changed
   [Arguments]                      ${LOG_ID}           ${EVENT_MESSAGE}        ${FORM_ID}       ${ADMIN_NAME}         
    Wait Until Page Contains        Logs                10
    Page Should Contain Element     table_log     
    Table Row Should Contain        table_log    1   ${LOG_ID}
    Table Row Should Contain        table_log    1   ${EVENT_MESSAGE}
    Table Row Should Contain        table_log    1   ${FORM_ID}
    Table Row Should Contain        table_log    1   ${ADMIN_NAME}
    Log To Console                  ${LOG_ID}
    Log To Console                  ${EVENT_MESSAGE}
    Log To Console                  ${FORM_ID}
    Log To Console                  ${ADMIN_NAME}
Close Chrome Browser
    Close Browser