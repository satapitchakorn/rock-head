*** Settings ***
Library         SeleniumLibrary

*** Variables ***
${URL_init}     http://167.99.70.176:8080/api/v1/init
# ${URL_form}     http://167.99.66.174/form
# ${URL_log}      http://167.99.66.174/logs
${URL_form}      http://localhost:4200/form
${URL_log}      http://localhost:4200/logs
${URL_data}     http://167.99.70.176:8080/api/v1/employee


*** Keywords ***
Open Browser and get into link
    # Open Browser                    ${URL_init}          Chrome         remote_url=http://206.189.154.4:4444/wd/hub          desired_capabilities=browserName:chrome
    Open Browser                    ${URL_init}          Chrome         
    Maximize Browser Window
    Go To                           ${URL_form}
    # Set Selenium Speed              0.2
Choose ADD menu for add new user
    Wait Until Page Contains	    EMPLOYEE INFORMATION MANAGEMENT	
    Click Button                    id:btnAdd
Fill up the details for new user
    [Arguments]                     ${PASSPORT}         ${EMPLOYEE_ID}          ${FIRSTNAME}          ${LASTNAME}           ${POSITION}         ${START_DATE}          ${EMAIL}          ${PHONE}
    Wait Until Page Contains	    ADD EMPLOYEE INFORMATION	
    Select From List By Label       selectPassport      Identity Card No.
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
Check the details of new user
    [Arguments]                     ${EVENT_MESSAGE}    ${FORM_ID}          ${ADMIN_NAME}         
    Wait Until Page Contains        LOGS                10  
    Table Row Should Contain        table_log    1      ${EVENT_MESSAGE}
    Table Row Should Contain        table_log    1      ${FORM_ID}
    Table Row Should Contain        table_log    1      ${ADMIN_NAME}
Choose MODIFY menu for edit user details
    Go To                           ${URL_form}          
    Wait Until Page Contains	    EMPLOYEE INFORMATION MANAGEMENT
    Click Button                    id:btnModify
    Wait Until Element Is Visible   edit251182
    Click Element                   edit251182
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
    [Arguments]                     ${EVENT_MESSAGE}    ${FORM_ID}          ${ADMIN_NAME}         
    Wait Until Page Contains        LOGS                10  
    Table Row Should Contain        table_log    1      ${EVENT_MESSAGE}
    Table Row Should Contain        table_log    1      ${FORM_ID}
    Table Row Should Contain        table_log    1      ${ADMIN_NAME}
Choose DELETE menu for change user status to Inactive
    Go To                           ${URL_form}
    Wait Until Page Contains        EMPLOYEE INFORMATION MANAGEMENT         10
    Click Button                    id:btnRemove 
    Wait Until Element Is Visible   delete251166
    Click Element                   delete251166
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
Check the user status who was changed
    [Arguments]                     ${EVENT_MESSAGE}    ${FORM_ID}       ${ADMIN_NAME}         
    Wait Until Page Contains        LOGS                10  
    Table Row Should Contain        table_log    1      ${EVENT_MESSAGE}
    Table Row Should Contain        table_log    1      ${FORM_ID}
    Table Row Should Contain        table_log    1      ${ADMIN_NAME}
Close Chrome Browser
    Close Browser