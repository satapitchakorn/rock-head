*** Settings ***
Resource        log-keywords.robot
Library         SeleniumLibrary
Library         DateTime
# Test Setup      เปิด Browser Chrome และเข้า Website
Test Teardown   ปิด Browser Chrome

*** Test Cases ***
ทดสอบการเก็บ LOG HISTORY
    เปิด Browser Chrome และเข้า Website
    เลือก เมนู ADD เพื่อเพิ่มผู้ใช้ใหม่เข้าสู่ระบบ
    กรอกข้อมูลผู้ใช้ใหม่                                  1509901589765     000759      RATTHAWAN       SERMSUWANNASAK          FRONTEND        08/13/2020              ratthawan@allianz.com       +66955419228
    # ตรวจสอบผู้ใช้ใหม่ที่ถูกเพิ่มเข้าสู่ระบบ                     001               RATTHAWAN SERMSUWANNASUK SUCCESSFUL BY ADMIN        ADD             SUPACHAI UTHAWISAN      08/13/2020           
    # เลือก เมนู MODIFY เพื่อแก้ไขข้อมูลผู้ใช้ในระบบ            
    # แก้ไขข้อมูลผู้ใช้ในระบบ      
    # ตรวจสอบผู้ใช้ในระบบที่ถูกแก้ไข                          
    # เลือก เมนู DELETE เพื่อเปลี่ยนสถานะผู้ใช้เป็น INACTIVE                     
    # เปลี่ยนสถานะผู้ใช้เป็น INACTIVE
    # ตรวจสอบผู้ใช้ในระบบที่ถูกเปลี่ยนสถานะเป็น INACTIVE
    # ปิด Browser Chrome                   
    
