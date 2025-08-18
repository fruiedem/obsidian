



## DB 연결 정보
```
const dbwfConfig = {
    server: '10.131.7.168',
    user: 'wf_user',
    password: 'P@ssw0rd',
    database: 'WF_TMS',
    port: 31433,
    options: {
      encrypt: false,
      trustServerCertificate: true,
    }
};
```





## 쿼리 호출(ConnecitonPool) 방식

### promise 기반 처리

|**특징**|**`async/await` 방식**|**`then/catch` 방식**|
|---|---|---|
|**가독성**|동기 코드처럼 작성 가능, 간결하고 직관적|체이닝이 길어지면 복잡해질 수 있음|
|**에러 처리**|`try...catch` 블록으로 명확하게 처리 가능|`catch` 블록에서 처리|
|**코드 흐름**|순차적으로 실행되는 코드 흐름을 쉽게 이해 가능|체이닝으로 흐름을 표현|
|**복잡한 비동기 작업**|여러 단계의 비동기 작업을 처리하기에 적합|체이닝이 길어지면 관리가 어려울 수 있음|
|**최종 처리**|`finally` 블록에서 후처리 가능|`finally` 메서드에서 후처리 가능|


#### async/ await 처리

```js
      const query = `
          SELECT table_name
          FROM information_schema.tables
          WHERE table_schema = @schemaName AND table_type = 'BASE TABLE';
        `;
      const query2 = `select name from sys.tables`
      try{
        // 데이터베이스 연결
        const pool = await mssql.connect(dbwfConfig);
        console.log('pool:',pool)
        // 매개변수 전달 및 쿼리 실행
        const result = await pool.request()
          // .input('schemaName', mssql.VarChar, schemaName) // 매개변수 전달
          .query(query2)
        console.log('Result:',result)
        } catch (err) {
          console.log('SQL Error:', err)
        } finally {
          // 연결 닫기
          mssql.close();
        }
```

#### then/ catch 처리
```js
mssql.connect(dbwfConfig)
    .then(pool => {
        return pool.request().query(query2);
    })
    .then(result => {
        console.log('Result:', result);
    })
    .catch(err => {
        console.log('SQL Error:', err);
    })
    .finally(() => {
        mssql.close();
    });

```