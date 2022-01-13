# Triple Assignment

### Preview

![Jan-13-2022 01-42-57](https://user-images.githubusercontent.com/26598561/149183627-71631be1-76fc-4efc-ac17-100cb198d366.gif)

### 1. 프로젝트 실행

```bash
  $ npm install
  $ npm start
```

### 2. 프로젝트 구성

```bash
  .
  ├── assets
  │   └── images                 : 주어진 이미지를 담는 폴더
  ├── data
  │   └── statics.js             : 주어진 데이터를 담는 폴더
  ├── components                 : 섹션을 구성하는 컴포넌트들
  │   ├── ImageWithInfo          : 이미지와 Information이 함께 들어간 Component
  │   │   ├── index.js
  │   │   └── index.scss
  │   ├── InfoText               : 텍스트만 보여주는 컴포넌트
  │   │   ├── index.js
  │   │   └── index.scss
  │   └── StatisticSection       : 통계 섹션
  │       ├── index.js
  │       └── index.scss
  ├── constants                  : 상수
  │   └── counter.js
  ├── hooks                      : custom hooks
  │   └── useNumberAnimation.js
  ├── pages                      : 페이지들
  │   └── Home
  │       └── index.js
  ├── styles                     : 전체적으로 쓰이는 스타일들
  │   ├── _animations.scss
  │   ├── colors.scss
  │   └── global.scss
  ├── utils                      : 유틸
  │   └── animations.js
  └── index.js
```

### 3. 기술 스택

#### 주어진 기술스택

- React
- [titicacadev/eslint-config-triple](https://github.com/titicacadev/eslint-config-triple)

#### 선택한 기술스택과 이유

- `Typescript`
  - 명시적으로 타입을 지정해 줌으로써 원활한 협업을 위해 선택했습니다.
  - 컴파일 타임에서 오류를 잡아낼 수 있어 보다 쉽고 효율적으로 개발을 진행할 수 있습니다.
- `SCSS`
  - CSS보다 가독성, 재활용 면에서 좋습니다.
  - JS와 CSS 간의 긴밀한 상태 공유가 필요하지 않은 상태였기 때문에 CSS in JS를 선택하지 않았습니다.

### 4. 애니메이션

#### 영역별 등장 애니메이션

- 좌측 이미지, 지표 문구, 수상 내역 순으로 표시됩니다.
- 살짝 위로 떠오르는 듯한 애니메이션과 투명도를 조절하는 애니메이션이 적용되었습니다.
- 등장 애니메이션의 duration은 700ms이고, 애니메이션 사이 간격은 100ms입니다.

#### 숫자 증가 애니메이션

- 각 숫자는 0부터 시작합니다.
- 세 숫자 모두 2초 동안 증가하고, 동시에 끝납니다.
- 증가 속도가 점점 느려집니다.
