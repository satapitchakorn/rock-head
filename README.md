# NAMING COVENTION
--- 
# Convention Web UI
## Common Convention
- โค้ดการทำงานหนึ่งบรรทัด มีการใส่ Semi-colon `;`
```
console.log(this.test);
```

## Function And Parameter Naming Conventions
- ส่วนที่เกี่ยวข้องกับ UI จะใช้รูปแบบการตั้งชื่อแบบ **camelCase ขึ้นต้นต้วยตัวพิมพ์ใหญ่**
- ส่วนที่เป็นการคำนวน จะใช้รูปแบบการตั้งชื่อแบบ **camelCase ขึ้นต้นต้วยตัวพิมพ์เล็ก**
```
func Homepage() //UI
func calculateTotalPrice() //logic
```

## HTML Element ID 
- จะใช้รูปแบบการตั้งชื่อแบบ **camelCase ขึ้นต้นต้วยตัวพิมพ์เล็ก**
```
receiverName
totalAmount
```

## Directory Name
- ใช้รูปแบบการตั้งชื่อโฟเดอร์แบบ **skewer-case**  โดยให้ทุกคำเป็นตัวพิมพ์เล็กและมีเครื่องหมาย `-` กั้นระหว่างคำ เช่น 
```
order
product
order-summary
product-detail

```

## File Name
- ใช้รูปแบบการตั้งชื่อฟังก์ชั่นแบบ **skewer-case**  โดยให้ทุกคำเป็นตัวพิมพ์เล็กและมีเครื่องหมาย `-` กั้นระหว่างคำ เช่น 
```
Order.js
Shipping.test.js
```

## Class Name
- ใช้รูปแบบการตั้งชื่อฟังก์ชั่นแบบ **PascalCase ขึ้นต้นต้วยตัวพิมพ์ใหญ่**
```
Order
ShippingCart
ProductDetail
```

## Test Name
- ใช้รูปแบบการตั้งชื่อให้สื่อความหมาย  เช่น
```
describe('CalculateTotalPrice', () => {
it('Input 5+8 should be 13',()=>{
        const expected = 13
        const productPriceList = ["5","8"]

        const actual = CalculateTotalPrice(productPriceList)

        expect(actual).toEqual(expected)
    })
}
```

## Variable Name
- ชื่อตัวแปรเป็นคำเดียวให้ตั้งชื่อเป็นพิมพ์เล็กทั้งหมด เช่น
```
day, month, year
```

- ชื่อตัวแปรมีความยาวตั้งแต่ 2 คำขึ้นไป ให้คำหลังขึ้นตันด้วยตัวอักษรตัวใหญ่เสมอ ในรูปแบบ **camelCase** เช่น
```
startDay, endMonth
```

- ชื่อตัวแปรเก็บค่าให้เติม "List" ต่อท้ายตัวแปรเสมอ เช่น
```
orderList
```

- ชื่อตัวแปร Constant ให้ตังชื่อเป็นตัวอักษรพิมพ์ใหญ่ทั้งหมด เช่น
```
HOUR, MINUTE
```

---

# Convention Web Service
## Function And Parameter Naming Conventions
- ใช้รูปแบบการตั้งชื่อฟังก์ชั่นแบบ **camelCase ขึ้นต้นต้วยตัวพิมพ์เล็ก**
```
func calculateTotalPrice()
```

## Directory Name
- ใช้ตัวอักษรพิมพ์เล็ก **(lowercase)** ทั้งหมด เช่น
```
order
product
```

## File Name/Class Name
- PascalCase ขึ้นต้นด้วยตัวใหญ่ทุกคำ เช่น
```
OrderService.java
ProductRepository.java
OrderServiceTest.java
```

## Package Name
- ใช้ตัวอักษรพิมพ์เล็ก **(lowercase)** ทั้งหมด เช่น
```
order
product
```

## Test Function Name
- ใช้รูปแบบการตั้งชื่อฟังก์ชันเป็นแบบ **snake_case** เช่น
```
Test_CalculateAge_Input_Birth_Date_18042003_Should_be_16
```

## Variable Name
- ชื่อตัวแปรเป็นคำเดียวให้ตั้งชื่อเป็นพิมพ์เล็กทั้งหมด เช่น
```
day, month, year
```

- ชื่อตัวแปรมีความยาวตั้งแต่ 2 คำขึ้นไป ให้คำหลังขึ้นตันด้วยตัวอักษรตัวใหญ่เสมอ ในรูปแบบ **camelCase** เช่น
```
startDay, endMonth
```

- ชื่อตัวแปรเก็บค่าให้เติม "List" ต่อท้ายตัวแปรเสมอ เช่น
```
orderList
```

- ชื่อตัวแปร Constant ให้ตังชื่อเป็นตัวอักษรพิมพ์ใหญ่ทั้งหมด เช่น
```
HOUR, MINUTE
```

## JSON Properties 
- ชื่อคีย์คำเดียวให้ตั้งชื่อเป็นพิมพ์เล็กทั้งหมด เช่น
```
day, month, year
```

- ชื่อคีย์มีความยาวตั้งแต่ 2 คำขึ้นไป ให้คำหลังขึ้นตันด้วยตัวอักษรตัวใหญ่เสมอ ในรูปแบบ **snake_case** เช่น
```
start_Day, end_Month
```
---


## ข้อตกลง Commit Message ร่วมกัน
```
[Created]: Create new file 'fliename' for...(doing what?)

[Edited]: edit code in the existing file

[Added]: for adding new gfunction, function test

[Deleted]: remove file 'filename' because...

[Refactor]: improve code structure in 'filename' on function 'function name'

* ให้เขียนรายละเอียดด้วยว่าแก้ไขอะไรและทำที่ตรงไหนที่ไฟล์ใด

```