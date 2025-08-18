모두 그려진 결과를 봐야알 수 있음...






chatgpt 예시
```mermaid
erDiagram
Customer {
id INT PK
name VARCHAR(100)
email VARCHAR(100) "UNIQUE"
phone VARCHAR(15)
}
Order {
id INT PK
order_date DATE
customer_id INT(100) FK
total_amount DECIMAL
}
Product {
id INT PK
name VARCHAR(100)
price DECIMAL
stock INT
}
OrderItem {
id INT PK
order_id INT FK
product_id INT FK
quantity INT
price DECIMAL
}
Supplier {
id INT PK
name VARCHAR(100)
contact VARCHAR(100)
}
Inventory {
id INT PK
product_id INT FK
supplier_id INT FK
quantity INT
last_updated DATE
}
Category {
id INT PK
name VARCHAR(100)
}
ProductCategory {
id INT PK
product_id INT FK
category_id INT FK
}
Payment {
id INT PK
order_id INT FK
payment_date DATE
amount DECIMAL
method VARCHAR(50)
}
Shipping {
id INT PK
order_id INT FK
shipping_date DATE
tracking_number VARCHAR(100)
status VARCHAR(50)
}
Address {
id INT PK
customer_id INT FK
street VARCHAR(100)
city VARCHAR(50)
state VARCHAR(50)
zip_code VARCHAR(10)
}
Review {
id INT PK
product_id INT FK
customer_id INT FK
rating INT
comment TEXT
review_date DATE
}
Discount {
id INT PK
code VARCHAR(50)
description TEXT
percentage DECIMAL
valid_from DATE
valid_to DATE
}
OrderDiscount {
id INT PK
order_id INT FK
discount_id INT FK
}
Employee {
id INT PK
name VARCHAR(100)
position VARCHAR(50)
hire_date DATE
salary DECIMAL
}
Department {
id INT PK
name VARCHAR(100)
manager_id INT FK
}
EmployeeDepartment {
id INT PK
employee_id INT FK
department_id INT FK
}
Shift {
id INT PK
employee_id INT FK
shift_date DATE
start_time TIME
end_time TIME
}
AuditLog {
id INT PK
action VARCHAR(100)
user_id INT FK
timestamp DATETIME
}

Customer ||--o| Order : "places"
Order ||--o| OrderItem : "contains"
Product ||--o| OrderItem : "is part of"
Product ||--o| Inventory : "stored in"
Supplier ||--o| Inventory : "supplies"
Product ||--o| ProductCategory : "categorized as"
Category ||--o| ProductCategory : "includes"
Order ||--o| Payment : "paid by"
Order ||--o| Shipping : "shipped to"
Customer ||--o| Address : "has"
Product ||--o| Review : "reviewed by"
Customer ||--o| Review : "writes"
Order ||--o| OrderDiscount : "applies"
Discount ||--o| OrderDiscount : "used in"
Employee ||--o| EmployeeDepartment : "works in"
Department ||--o| EmployeeDepartment : "has"
Employee ||--o| Shift : "assigned to"
Employee ||--o| AuditLog : "performs"
```


```mermaid
erDiagram
Customer {
INT id PK
VARCHAR(100) name
VARCHAR(100) email "UNIQUE"
VARCHAR(15) phone
}
```


```mermaid
erDiagram
Customer {
INT id
VARCHAR name
VARCHAR email
VARCHAR phone
}
Order {
INT id
DATE order_date
INT customer_id
DECIMAL(10,2) total_amount
}
Customer ||--o{ Order : "places"

```