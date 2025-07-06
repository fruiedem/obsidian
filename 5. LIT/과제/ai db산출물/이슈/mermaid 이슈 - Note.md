[프롬프트]
웹에서 mermaid erdiagram 을 표시하고 테이블별로 팝업 기능 구현하는 방법

[AI응답]

웹에서 Mermaid를 사용하여 ERD(Entity Relationship Diagram)를 표시하고, 테이블별로 팝업 기능을 구현하려면 Mermaid와 JavaScript를 결합하여 사용자 인터랙션을 추가해야 합니다. Mermaid 자체는 다이어그램을 렌더링하는 데 초점이 맞춰져 있지만, JavaScript를 활용하면 테이블을 클릭했을 때 팝업을 표시하거나 추가 정보를 제공할 수 있습니다.

아래는 Mermaid ERD를 웹에서 표시하고 테이블별로 팝업 기능을 구현하는 방법에 대한 단계별 설명입니다.

1. Mermaid 설치 및 기본 설정
Mermaid를 웹에서 사용하려면 Mermaid의 CDN을 포함하거나 npm을 통해 설치할 수 있습니다.

CDN 방식
HTML 파일에 Mermaid의 CDN을 추가합니다:


```html
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
```

Mermaid 초기화
Mermaid를 초기화하여 다이어그램을 렌더링할 준비를 합니다:
```html
<script>
    mermaid.initialize({ startOnLoad: true });
</script>
```

2. Mermaid ERD 작성
Mermaid 다이어그램을 HTML에 작성합니다. div 태그에 Mermaid 코드를 포함합니다.
```html
<div class="mermaid">
erDiagram
    Customer {
        id INT PK
        name VARCHAR(100)
        email VARCHAR(100) UNIQUE
        phone VARCHAR(15)
    }
    Order {
        id INT PK
        order_date DATE
        customer_id INT FK
        total_amount DECIMAL(10,2)
    }
    Customer ||--o| Order : "places"
</div>
```



3. JavaScript로 팝업 기능 구현
Mermaid는 다이어그램을 SVG로 렌더링합니다. 따라서 JavaScript를 사용하여 특정 테이블을 클릭했을 때 팝업을 표시하도록 이벤트를 추가할 수 있습니다.

HTML 구조
팝업을 표시할 HTML 요소를 추가합니다:

```html
<div id="popup" style="display: none; position: absolute; background: white; border: 1px solid black; padding: 10px;">
    <span id="popup-content"></span>
    <button onclick="closePopup()">Close</button>
</div>
```


JavaScript 코드
Mermaid가 렌더링한 SVG 요소에 클릭 이벤트를 추가합니다:

```HTML
코드 복사
<script>
    // 팝업 닫기 함수
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

    // 팝업 열기 함수
    function showPopup(content, x, y) {
        const popup = document.getElementById('popup');
        const popupContent = document.getElementById('popup-content');
        popupContent.innerHTML = content;
        popup.style.left = x + 'px';
        popup.style.top = y + 'px';
        popup.style.display = 'block';
    }

    // Mermaid 다이어그램 렌더링 후 이벤트 추가
    document.addEventListener('DOMContentLoaded', () => {
        const svgElements = document.querySelectorAll('.mermaid svg g[class="classGroup"]'); // Mermaid 테이블 그룹 선택

        svgElements.forEach((element) => {
            const tableName = element.querySelector('text').textContent; // 테이블 이름 가져오기

            element.addEventListener('click', (event) => {
                const rect = element.getBoundingClientRect();
                const x = rect.left + window.scrollX + rect.width / 2;
                const y = rect.top + window.scrollY + rect.height / 2;

                // 팝업에 표시할 내용
                const popupContent = `You clicked on table: <b>${tableName}</b>`;
                showPopup(popupContent, x, y);
            });
        });
    });
</script>
```

4. 전체 HTML 예제
아래는 모든 코드를 포함한 완전한 예제입니다:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mermaid ERD with Popup</title>
    <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
    <style>
        #popup {
            display: none;
            position: absolute;
            background: white;
            border: 1px solid black;
            padding: 10px;
            z-index: 1000;
        }
    </style>
</head>
<body>
    <div class="mermaid">
        erDiagram
        Customer {
            id INT PK
            name VARCHAR(100)
            email VARCHAR(100) UNIQUE
            phone VARCHAR(15)
        }
        Order {
            id INT PK
            order_date DATE
            customer_id INT FK
            total_amount DECIMAL(10,2)
        }
        Customer ||--o| Order : "places"
    </div>

    <div id="popup">
        <span id="popup-content"></span>
        <button onclick="closePopup()">Close</button>
    </div>

    <script>
        mermaid.initialize({ startOnLoad: true });

        function closePopup() {
            document.getElementById('popup').style.display = 'none';
        }

        function showPopup(content, x, y) {
            const popup = document.getElementById('popup');
            const popupContent = document.getElementById('popup-content');
            popupContent.innerHTML = content;
            popup.style.left = x + 'px';
            popup.style.top = y + 'px';
            popup.style.display = 'block';
        }

        document.addEventListener('DOMContentLoaded', () => {
            const svgElements = document.querySelectorAll('.mermaid svg g[class="classGroup"]');

            svgElements.forEach((element) => {
                const tableName = element.querySelector('text').textContent;

                element.addEventListener('click', (event) => {
                    const rect = element.getBoundingClientRect();
                    const x = rect.left + window.scrollX + rect.width / 2;
                    const y = rect.top + window.scrollY + rect.height / 2;

                    const popupContent = `You clicked on table: <b>${tableName}</b>`;
                    showPopup(popupContent, x, y);
                });
            });
        });
    </script>
</body>
</html>
```

결과
Mermaid ERD가 웹 페이지에 렌더링됩니다.
테이블을 클릭하면 팝업이 나타나며, 클릭한 테이블의 이름을 표시합니다.
팝업은 닫기 버튼을 클릭하면 사라집니다.
확장 가능성
팝업에 테이블의 상세 정보를 표시하려면 테이블 이름에 따라 추가 데이터를 제공하는 로직을 구현할 수 있습니다.
CSS를 사용하여 팝업 스타일을 개선할 수 있습니다.
JavaScript를 확장하여 더 복잡한 인터랙션(예: 테이블 간 관계 표시)을 추가할 수 있습니다.


