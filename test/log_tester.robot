*** Settings ***
Resource        log-keywords.robot
Library         SeleniumLibrary
Library         DateTime
Test Teardown   Close Chrome Browser

*** Test Cases ***
ทดสอบการเก็บ LOG HISTORY
    Open Browser and get into link
    Choose ADD menu for add new user
    Fill up the details for new user                                    1509901589765     000759      RATTHAWAN       SERMSUWANNASAK          FRONTEND        08/13/2020              ratthawan@allianz.com       +66955419228
    Check the details of new user                                     1     Modify employee in firstname from Hasaneeya to Neeya.       By     2020-08-14         
    Choose MODIFY menu for edit user details            
    Edit user details
    Check the details of user who was fixed                         
    Choose DELETE menu for change user status to Inactive                    
    Change user status to Inactive
    Check the user status who was changed
    Close Chrome Browser                
    
