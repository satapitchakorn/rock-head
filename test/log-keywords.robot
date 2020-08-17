*** Settings ***
Library         SeleniumLibrary

*** Variables ***
${URL}          http://localhost:4200/form
# ${FULL_NAME}    Supachai Uthawisan

*** Keywords ***

Open Browser and get into link
    Open Browser                    ${URL}              Chrome
    Maximize Browser Window
    Set Selenium Speed              0.1
Choose ADD menu for add new user
    Wait Until Page Contains	    Employee information management	
    Click Button                    id:btnAdd
        Sleep                           3
Fill up the details for new user
    [Arguments]                     ${PASSPORT}         ${EMPLOYEE_ID}          ${FIRSTNAME}          ${LASTNAME}          ${POSITION}          ${START_DATE}          ${EMAIL}          ${PHONE}
    Wait Until Page Contains	    EMPLOYEE INFORMATION	
    Input Text	                    inputPassport       ${PASSPORT}
    Input Text	                    inputEmployeeId     ${EMPLOYEE_ID}
    Input Text	                    inputFirstname      ${FIRSTNAME}
    Input Text	                    inputLastname       ${LASTNAME}
    Input Text	                    inputPosition       ${POSITION}
    Input Text	                    inputStartDate      ${START_DATE}
    Input Text	                    inputEmail          ${EMAIL}
    Input Text	                    inputPhone          ${PHONE}
    Click Button                    id:btnSave
    Click Element                   xpath://html/body/div/div/div[3]/button[1]
    Click Element                   xpath://html/body/div/div/div[3]/button[1]
    Click Element                   xpath://html/body/app-root/nav/ul/li[3]/a
        Sleep                           3
Check the details of new user
   [Arguments]                      ${LOG_ID}           ${EVENT_MESSAGE}        ${POSITION}         ${ADMIN_NAME}         
    Wait Until Page Contains	    Log
    Element Should Contain          Log ID               ${LOG_ID}
    # ${data}                         Get data            xpath://table[@id="HTML1"]/div[1]/table/tbody/tr[5]/td[2]
    # Log to console                  ${data}
    Element Should Contain	        Event Message	    ${EVENT_MESSAGE}
    # Element Should Contain	        actionId            ${ACTION_ID}
    Element Should Contain	        By                  ${ADMIN_NAME}
        Sleep                           5
    Click Button                    id:navForm
Choose MODIFY menu for edit user details
    Wait Until Page Contains	    EventActionPage	
    Click Button                    id:btnModify
        Sleep                           3
Edit user details
    [Arguments]                     ${PASSPORT}         ${EMPLOYEE_ID}          ${FIRSTNAME}        ${LASTNAME}         ${POSITION}         ${START_DATE}         ${EMAIL}          ${PHONE}
    Wait Until Page Contains        Edit Employee
    Element Should Be Disabled      inputPassport       ${PASSPORT}
    Element Should Be Disabled      inputEmployeeId     ${EMPLOYEE_ID}
    Input Text	                    inputFirstname      ${FIRSTNAME}
    Input Text	                    inputLastname       ${LASTNAME}
    Input Text	                    inputPosition       ${POSITION}
    Input Text	                    inputStartDate      ${START_DATE}
    Input Text	                    inputEmail          ${EMAIL}
    Input Text	                    inputPhone          ${PHONE}
    Click Button                    id:btnSave
    Wait Until Page Contains        Confirmation
    Click Button                    id:btnYes
        Sleep                           3
Check the details of user who was fixed
   [Arguments]                      ${EMPLOYEE_ID}      ${EVENT_MESSAGE}        ${POSITION}         ${ADMIN_NAME}         
    Wait Until Page Contains	    Log
    Element Should Contain	        inputEmployeeId     ${EMPLOYEE_ID}
    Element Should Contain	        eventMessage	    ${EVENT_MESSAGE}
    Element Should Contain	        inputPosition       ${POSITION}
    Element Should Contain	        inputFirstname      ${ADMIN_NAME}
        Sleep                           3
    Click Button                    id:navForm
Choose DELETE menu for change user status to Inactive
    Wait Until Page Contains	    EventActionPage	
    Click Button                    id:btnRemove
        Sleep                           3
Change user status to Inactive
    [Arguments]                     ${PASSPORT}         ${EMPLOYEE_ID}          ${FIRSTNAME}        ${LASTNAME}         ${POSITION}         ${START_DATE}         ${EMAIL}          ${PHONE}
    Wait Until Page Contains        Delete Employee
    Element Should Be Disabled      inputPassport       ${PASSPORT}
    Element Should Be Disabled      inputEmployeeId     ${EMPLOYEE_ID}
    Element Should Be Disabled      inputFirstname      ${FIRSTNAME}
    Element Should Be Disabled      inputLastname       ${LASTNAME}
    Element Should Be Disabled      inputPosition       ${POSITION}
    Element Should Be Disabled      inputStartDate      ${START_DATE}
    Element Should Be Disabled      inputEmail          ${EMAIL}
    Element Should Be Disabled      inputPhone          ${PHONE}
    Click Button                    id:delete_button
    Wait Until Page Contains        Confirmation
    Click Button                    id:btnYes
        Sleep                           3
Check the user status who was changed
   [Arguments]                      ${EMPLOYEE_ID}      ${EVENT_MESSAGE}        ${POSITION}         ${ADMIN_NAME}         
    Wait Until Page Contains	    Log
    Element Should Contain	        inputEmployeeId     ${EMPLOYEE_ID}
    Element Should Contain	        eventMessage	    ${EVENT_MESSAGE}
    Element Should Contain	        inputPosition       ${POSITION}
    Element Should Contain	        inputFirstname      ${ADMIN_NAME}
        Sleep                           3
    Click Button                    id:navForm
Close Chrome Browser
    Close Browser