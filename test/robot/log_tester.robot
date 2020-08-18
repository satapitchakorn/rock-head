*** Settings ***
Resource        log-keywords.robot
Library         SeleniumLibrary
Library         DateTime
Test Teardown   Close Chrome Browser

*** Test Cases ***
ADD TEST CASE
    Open Browser and get into link
    Choose ADD menu for add new user
    Fill up the details for new user                                    1509901589765       000759      ratthawan       Sermsuwannasak          Junior Front End Developer      08/13/2020      ratthawan@allianz.com               +66955419228
    Check the details of new user                                       1                   Add ratthawan Sermsuwannasak successful.            001                             narongrit.rodphroboon@allianz.com      
# MODIFY TEST CASE    
#     Choose MODIFY menu for edit user details                            
#     Edit user details                                                                                   Kanawat         Phuengphadung           Junior Back End Developer       18/03/2020      kanawat.phuengphadung@allianz.com   +66845545432
#     Check the details of user who was fixed                             1                   //                                                  002                             narongrit.rodphroboon@allianz.com
# DELETE TEST CASE                          
#     Choose DELETE menu for change user status to Inactive                    
#     Change user status to Inactive                                      1234567890123       251182      Hasaneeya       Kaenthram               Junior Front End Developer      18/03/2020      hasaneeya.kaenthram@allianz.com     +66876543210
#     Check the user status who was changed                               1                   //                                                  003                             narongrit.rodphroboon@allianz.com
#     Close Chrome Browser  

    
