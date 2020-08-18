# NAMING COVENTION
---
# Install
```
nmp install
npm i sweetalert2
ng add @ng-bootstrap/ng-bootstrap
```
---

# Convention Web UI
## Common Convention
- โค้ดการทำงานหนึ่งบรรทัด มีการใส่ Semi-colon `;`
```
console.log(this.test);
```

## Function And Parameter Naming Conventions
- จะใช้รูปแบบการตั้งชื่อแบบ **camelCase ขึ้นต้นต้วยตัวพิมพ์เล็ก**
```
addEmployeeAlert()
```

## HTML Element ID 
- จะใช้รูปแบบการตั้งชื่อแบบ **camelCase ขึ้นต้นต้วยตัวพิมพ์เล็ก**
```
inputEmployeeId
btnSave
```

## Directory Name
- ใช้รูปแบบการตั้งชื่อโฟเดอร์แบบ **skewer-case**  โดยให้ทุกคำเป็นตัวพิมพ์เล็กและมีเครื่องหมาย `-` กั้นระหว่างคำ เช่น 
```
employee
components
models
services
log
```

## File Name
- ใช้รูปแบบการตั้งชื่อฟังก์ชั่นแบบ **skewer-case**  โดยให้ทุกคำเป็นตัวพิมพ์เล็กและมีเครื่องหมาย `-` กั้นระหว่างคำ เช่น 
```
event-action-add-page.component.ts
event-action-add-page.component.spec.ts
```

## Class Name
- ใช้รูปแบบการตั้งชื่อฟังก์ชั่นแบบ **PascalCase ขึ้นต้นต้วยตัวพิมพ์ใหญ่**
```
EventActionAddPageComponent
EventActionModifyPageComponent
EventActionRemovePageComponent
```

## Variable Name
- ชื่อตัวแปรเป็นคำเดียว ใช้ตัวอักษรพิมพ์เล็ก **lowercase** ทั้งหมด เช่น
```
day, month, year
```

- ชื่อตัวแปรมีความยาวตั้งแต่ 2 คำขึ้นไป ให้คำหลังขึ้นตันด้วยตัวอักษรตัวใหญ่เสมอ ในรูปแบบ **camelCase** เช่น
```
startDay, endMonth
```

- ชื่อตัวแปร Constant ใช้ตัวอักษรพิมพ์ใหญ่ **UPPERCASE** ทั้งหมด เช่น
```
HOUR, MINUTE
```

---

# Convention Web Service
## Function And Parameter Naming Conventions
- ใช้รูปแบบการตั้งชื่อฟังก์ชั่นแบบ **camelCase ขึ้นต้นต้วยตัวพิมพ์เล็ก**
```
getAllLog()
```

## Directory Name
- ใช้ตัวอักษรพิมพ์เล็ก **lowercase** ทั้งหมด เช่น
```
employee
components
models
services
log
```

## File Name/Class Name
- PascalCase ขึ้นต้นด้วยตัวใหญ่ทุกคำ เช่น
```
LogService.java
LogRepository.java
LogServiceTest.java
```

## Package Name
- ใช้ตัวอักษรพิมพ์เล็ก **lowercase** ทั้งหมด เช่น
```
log
employee
```

## Test Function Name
- ใช้รูปแบบการตั้งชื่อฟังก์ชันเป็นแบบ **snake_case** เช่น
```
test_delete_employee_no_18042003_should_be_successful
```

## Variable Name
- ชื่อตัวแปรเป็นคำเดียว ใช้ตัวอักษรพิมพ์เล็ก **lowercase** ทั้งหมด เช่น
```
day, month, year
```

- ชื่อตัวแปรมีความยาวตั้งแต่ 2 คำขึ้นไป ให้คำหลังขึ้นตันด้วยตัวอักษรตัวใหญ่เสมอ ในรูปแบบ **camelCase** เช่น
```
startDay, endMonth
```

- ชื่อตัวแปร Constant ใช้ตัวอักษรพิมพ์ใหญ่ **UPPERCASE** ทั้งหมด เช่น
```
HOUR, MINUTE
```

## JSON Properties 
- ชื่อคีย์คำเดียวให้ตั้งชื่อเป็นพิมพ์เล็กทั้งหมด ในรูปแบบ **snake_case** เช่น
```
log_objects, employee_no, admin_no
```

- ชื่อคีย์มีความยาวตั้งแต่ 2 คำขึ้นไป ให้คำหลังขึ้นตันด้วยตัวอักษรตัวใหญ่เสมอ ในรูปแบบ **snake_case** เช่น
```
start_day, end_month
```
---


## ข้อตกลง Commit Message ร่วมกัน
```
[Created]: Create new file 'fliename' for...(doing what?)

[Edited]: edit code in the existing file

[Added]: for adding new function, function test

[Deleted]: remove file 'filename' because...

[Refactor]: improve code structure in 'filename' on function 'function name'

* ให้เขียนรายละเอียดด้วยว่าแก้ไขอะไรและทำที่ตรงไหนที่ไฟล์ใด

```