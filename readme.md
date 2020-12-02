## Description
Channel Co. Pre-Task

## Requirement
- [x] react, webpack을 베이스로 사용하여 개발
- [x] 보일러 플레이트(create-react-app 등)를 사용하지 않아야 함.
- [x] 검색 창이 있어 통합 검색이 되어야 함. (Case insensitive, 부분일치)
- [x] 버튼을 누르면 각 필드별 오름차순, 내림차순 정렬이 되어야 함.
- [ ] 각 나라의 데이터 Row에 삭제 버튼이 있어 누르면 삭제되어야 함.
- [ ] 나라 정보를 입력해서 Row를 추가할 수 있어야 함.
- [ ] 모든 상태(나라 목록, 정렬 상태, 검색어 등)는 데이터 관리 라이브러리(Redux, MobX 등)에 저장되어야 함.
- [ ] Network 통신은 redux middleware를 통해 되어야 함.

## Extra Requirement
- [ ] 일부만 로딩 후 스크롤 아래로 갈 시 추가 로딩
- [ ] form 라이브러리(redux-form, formik 등) 사용
- [ ] cross browsing 적용
- [ ] 검색 기능 (Rate limiting(debounce, throttle) 적용하여 타이핑 시 바로 검색)


## Initialization
```
1. git clone https://github.com/peppermint100/channel-pre-task`
2. yarn or npm install
3. yarn start or npm start
```

## Libraries
- axios
- formik
- redux
- react-redux
- redux-saga
- styled-components
 


