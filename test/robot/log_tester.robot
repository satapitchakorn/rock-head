*** Settings ***
Resource        log-keywords.robot
Library         SeleniumLibrary
Library         DateTime
Suite Teardown  Close Browser

*** Test Cases ***
ADD TEST CASE
    Open Browser and get into link
    Choose ADD menu for add new user
    Fill up the details for new user                                      1509901589765       251189      Ratthawan       Sermsuwannasak          Junior Front End Developer      08/13/2020      ratthawan.sermsuwannasak@allianz.com               +66955419228
    Check the details of new user                                         1                   Add Ratthawan Sermsuwannasak successful.            001                             narongrit.rodphroboon@allianz.com      
MODIFY TEST CASE    
    Choose MODIFY menu for edit user details                            
    Edit user details                                                                                     Hasaneeyamodify        +66845545432
    Check the details of user who was modified                               1                   Modify firstname from Hasaneeya to Hasaneeyamodify       002                             narongrit.rodphroboon@allianz.com
DELETE TEST CASE                          
    Choose DELETE menu for change user status to Inactive                    
    Change user status to Inactive                                        
    Check the user status who was changed                                 1                   Remove Kanawat Phuengphadung successful.            003                             narongrit.rodphroboon@allianz.com
    Close Chrome Browser

    
