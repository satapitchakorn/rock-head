*** Settings ***
Library         SeleniumLibrary

*** Variables ***
${URL}          http://localhost:4200/form
# ${FULL_NAME}    Supachai Uthawisan

*** Keywords ***

เปิด Browser Chrome และเข้า Website
    Open Browser                    ${URL}              Chrome
    Maximize Browser Window
    Set Selenium Speed              0.1
เลือก เมนู ADD เพื่อเพิ่มผู้ใช้ใหม่เข้าสู่ระบบ
    Wait Until Page Contains	    Employee information management	
    Click Button                    id:btnAdd
        Sleep                           3
กรอกข้อมูลผู้ใช้ใหม่
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
ตรวจสอบผู้ใช้ใหม่ที่ถูกเพิ่มเข้าสู่ระบบ
   [Arguments]                      ${LOG_ID}           ${EVENT_MESSAGE}        ${POSITION}         ${ADMIN_NAME}         
    Wait Until Page Contains	    History
    Element Should Contain          logId               ${LOG_ID}
    # ${data}                         Get data            xpath://table[@id="HTML1"]/div[1]/table/tbody/tr[5]/td[2]
    # Log to console                  ${data}
    Element Should Contain	        eventMessage	    ${EVENT_MESSAGE}
    Element Should Contain	        actionId            ${ACTION_ID}
    Element Should Contain	        inputFirstname      ${ADMIN_NAME}
        Sleep                           3
    Click Button                    id:navForm
เลือก เมนู MODIFY เพื่อแก้ไขข้อมูลผู้ใช้ในระบบ
    Wait Until Page Contains	    EventActionPage	
    Click Button                    id:btnModify
        Sleep                           3
แก้ไขข้อมูลผู้ใช้ในระบบ
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
ตรวจสอบผู้ใช้ในระบบที่ถูกแก้ไข
   [Arguments]                      ${EMPLOYEE_ID}      ${EVENT_MESSAGE}        ${POSITION}         ${ADMIN_NAME}         
    Wait Until Page Contains	    History
    Element Should Contain	        inputEmployeeId     ${EMPLOYEE_ID}
    Element Should Contain	        eventMessage	    ${EVENT_MESSAGE}
    Element Should Contain	        inputPosition       ${POSITION}
    Element Should Contain	        inputFirstname      ${ADMIN_NAME}
        Sleep                           3
    Click Button                    id:navForm
เลือก เมนู DELETE เพื่อเปลี่ยนสถานะผู้ใช้เป็น INACTIVE
    Wait Until Page Contains	    EventActionPage	
    Click Button                    id:btnRemove
        Sleep                           3
เปลี่ยนสถานะผู้ใช้เป็น INACTIVE
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
ตรวจสอบผู้ใช้ในระบบที่ถูกเปลี่ยนสถานะเป็น INACTIVE
   [Arguments]                      ${EMPLOYEE_ID}      ${EVENT_MESSAGE}        ${POSITION}         ${ADMIN_NAME}         
    Wait Until Page Contains	    History
    Element Should Contain	        inputEmployeeId     ${EMPLOYEE_ID}
    Element Should Contain	        eventMessage	    ${EVENT_MESSAGE}
    Element Should Contain	        inputPosition       ${POSITION}
    Element Should Contain	        inputFirstname      ${ADMIN_NAME}
        Sleep                           3
    Click Button                    id:navForm
ปิด Browser Chrome
    Close Browser