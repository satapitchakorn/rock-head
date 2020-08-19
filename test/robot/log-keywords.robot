*** Settings ***
Library         SeleniumLibrary

*** Variables ***
${URL_form}     http://localhost:4200/form
${URL_log}      http://localhost:4200/log
${URL_init}     http://167.99.70.176:8080/api/v1/init

# ${FULL_NAME}    Supachai Uthawisan

*** Keywords ***
Open Browser and get into link
    Open Browser                    ${URL_init}              Chrome
    Go To                           ${URL_form}
    Maximize Browser Window
    Set Selenium Speed              0.2
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
    Page Should Contain Element     id:table_log     
    Table Row Should Contain        id:table_log    1   ${LOG_ID}
    Table Row Should Contain        id:table_log    1   ${EVENT_MESSAGE}
    Table Row Should Contain        id:table_log    1   ${FORM_ID}
    Table Row Should Contain        id:table_log    1   ${ADMIN_NAME}
    Log To Console                  ${LOG_ID}
    Log To Console                  ${EVENT_MESSAGE}
    Log To Console                  ${FORM_ID}
    Log To Console                  ${ADMIN_NAME}
        Sleep                           5
Choose MODIFY menu for edit user details
    Go To                           ${URL_form}
    Wait Until Page Contains	    Employee information management
    Click Button                    id:btnModify
Edit user details
    [Arguments]                     ${FIRSTNAME}       ${LASTNAME}      ${POSITION}         ${START_DATE}         ${EMAIL}          ${PHONE}
    Wait Until Page Contains        MODIFY EMPLOYEE INFORMATION
    Element Should Be Disabled      selectPassport
    Element Should Be Disabled      inputPassport      
    Element Should Be Disabled      inputEmployeeId
    Input Text                      inputFirstname      ${FIRSTNAME}     
    Input Text                      inputLastname       ${LASTNAME}    
    Select From List By Label       selectPosition      ${POSITION}
    Input Text	                    inputStartDate      ${START_DATE}
    Input Text	                    inputEmail          ${EMAIL}
    Input Text	                    inputPhone          ${PHONE}
    Click Button                    id:btnSave
    Wait Until Page Contains        Are you sure?
    Click Element                   //button[@class='swal2-confirm swal2-styled']
    Wait Until Page Contains        Successful
    
Check the details of user who was fixed
  [Arguments]                       ${LOG_ID}            ${EVENT_MESSAGE}        ${FORM_ID}       ${ADMIN_NAME}         
    Wait Until Page Contains	    Logs
    Page Should Contain Element     id:table_log     
    Table Row Should Contain        id:table_log    1   ${LOG_ID}
    Table Row Should Contain        id:table_log    1   ${EVENT_MESSAGE}
    Table Row Should Contain        id:table_log    1   ${FORM_ID}
    Table Row Should Contain        id:table_log    1   ${ADMIN_NAME}
        Sleep                           10
Choose DELETE menu for change user status to Inactive
    Go To                           ${URL_form}
    Wait Until Page Contains	    Employee information management	
    Click Button                    id:btnRemove
Change user status to Inactive
    Wait Until Page Contains        REMOVE EMPLOYEE INFORMATION             
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
    Click Element                   //button[@class='swal2-confirm swal2-styled']
    Go To                           ${URL_log}
Check the user status who was changed
   [Arguments]                      ${LOG_ID}           ${EVENT_MESSAGE}        ${FORM_ID}       ${ADMIN_NAME}         
    Wait Until Page Contains	    Logs
    Page Should Contain Element     id:table_log     
    Table Row Should Contain        id:table_log    1   ${LOG_ID}
    Table Row Should Contain        id:table_log    1   ${EVENT_MESSAGE}
    Table Row Should Contain        id:table_log    1   ${FORM_ID}
    Table Row Should Contain        id:table_log    1   ${ADMIN_NAME}
    Log To Console                  ${LOG_ID}
    Log To Console                  ${EVENT_MESSAGE}
    Log To Console                  ${FORM_ID}
    Log To Console                  ${ADMIN_NAME}
        Sleep                           5
Close Chrome Browser
    Close Browser