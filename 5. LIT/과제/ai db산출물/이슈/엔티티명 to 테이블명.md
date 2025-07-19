
파일 불러오기
```js
    let tableClassMap: { [key: string]: string } = {};
    
    // 기존 파일이 있으면 읽어오기
    if (fs.existsSync(tableClassMapFilePath)) {
      const existingContent = fs.readFileSync(tableClassMapFilePath, 'utf8');
      tableClassMap = JSON.parse(existingContent);
    }
```

