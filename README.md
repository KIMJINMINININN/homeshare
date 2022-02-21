# homeshare

homeshare project

## 주소이동

1. 라우터 객체
2. Link

```
Router.push("/")
<Link href="/"/>
```

## pages

## public

## getServerSideProps

getServerSideProps는 useRouter안에 query로 접근하여서
넘어오는 name을 알수가있다.

npm install isomorphic-unfetch
EX)

```
import fetch from "isomorphic-unfetch";

const name = ({ user }) => {
    const username = user && user.name;
    return <div>{username}</div>;
}

export const getServerSideProps = async ({ query }) => {
    const {name} = query;
    try{
        const res = await fetch(`https://api.github.com/users/${name}`);
        if(res.status == 200){
            const user = await res.json();
            return {props: {user}};
        }
        return {props: {}};
    } catch (e){
        console.log(e);
        return {props : {}};
    }
}

export default name;
```

## getStaticProps

빌드시에 데이터를 불러와 결과를 json으로 저장하여 사용하게 된다.
일관적인 데이터를 보여준다.

옵션으로 아래와 같이 revalidate를 넣어주면 5초마다 갱신을 했을때에는 업데이트를 시켜주게된다.

```
export const getStaticProps =  async () => {
    return {props: {time: new Date().toISOString()}, revalidate: 5};
};
```

## getInitialProps

9.3버전 이전에 사용하던 함수.
초기랜더링때에는 클라이언트에서 데이터를 불러오지만,
이후에 랜더링때에는 서버에서 데이터를 불러 오게 되는 함수.
Next.js에서는 getServerSideProps, getStaticProps를 사용하기를 권장하고있다.

## styled-jsx

- styled-jsx 사용방법

```
import css from "styled-jsx/css";

const style = css`
    h2{

    }
    .user-bio{

    }
`

const username = ({user}) => {
    return(
        <>
            //...
            <style jsx>{style}</style>
        </>
    )
}
```

styled-jsx는 네스팅을 지원하지 않는다.
네스팅 -> Sass에서 사용하는 css의 naming 안에 naming넣기
ex)

```
p{
    a{
        div{

        }
    }
}
```

## 아이콘 react-icons

```
npm install react-icons
```

## 날짜 관련 라이브러리 date-fns

```
npm install date-fns
```

## 공통 페이지 : \_app

공통페이지를 나타내는 \_app의 코드중 아래와같다.

Component는 불러오는 페이지
pageProps는 getServerSideProps, getStaticProps 로 페이지에 전달해주는 props이다.

```
<Component {...pageProps} />
```

## 폰트, Icon 무료 https://fonts.google.com/

## Custom 에러페이지(500 Error, 404 Error)

pages/\_error.jsx

pages/404.jsx

## Typescript next.js 환경설정

```
yarn init -y
yarn add next react react-dom

-package.json에 아래 추가
 "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },

yarn dev실행후 tsconfig.json에서 strict true로 변경

-eslint 설정
npm install -D eslint
npx eslint --init
1->3, 2->import/export, 3->react, 4->Yes,5->Browser, 6->popular, 7->Airbnb, 8->Javascript
-eslintrc.js
추가해줄 rule 및 settings
rules: {
    "linebreak-style": 0,
    "eol-last": 0,
    quotes: ["error", "double"], //더블 쿼터 사용
    "@typescript-eslint/quotes": ["error", "double"], //더블 쿼터 사용
    "no-unused-vars": "off", //사용안한 변수 경고 중복
    "@typescript-eslint/no-unused-vars": "warn", //사용안한 변수는 경고
    "jsx-a11y/control-has-associated-label": "off", // 상호작용하는 엘리먼트에 label을 넣는다
    "react/no-array-index-key": "off", // key값으로 index를 사용할수 있다.
    "comma-dangle": "off", // 마지막에 , 을 넣어주지 않는다.
    "arrow-body-style": "off", //화살표 함수 안에 return을 사용 할 수 있다.
    "react/no-unescaped-entities": "off", //문자열 내에서 " ' > } 허용
    "react/prop-types": "off", //proptypes를 사용하지 않는다.
    "object-curly-newline": "off", // { 다음 줄 바꿈을 강제로 사용하지 않는다.
    "react/jsx-one-expression-per-line": "off", //한라인에 여러개의 JSX를 사용 할 수 있다.
    "implicit-arrow-linebreak": "off", // 화살표 함수 다음에 줄 바꿈을 사용할 수 있다.
    "no-shadow": "off", //파일 내에서 중복 이름을 사용 할 수 있다.
    "spaced-comment": "off", //주석을 뒤에 달 수 있다.
    "operator-linebreak": "off", //연산자 다음 줄 바꿈을 사용 할 수 있다.
    "react/react-in-jsx-scope": "off", // jsx를 사용하여도 React를 꼭 import 하지 않아도 된다.
    "react/jsx-props-no-spreading": "off", //props를 스프래드 할 수 있다.
    "jsx-a11y/anchor-is-valid": "off", // next js에서는 a에 href없이 사용
    "global-require": "off", //함수 내에서 require 사용가능
    "jsx-a11y/label-has-associated-control": "off", //label htmlFor을 사용하지 않아도 된다.
    "import/prefer-default-export": "off", //export default 를 사용하라.
    "no-param-reassign": "off",
    "react/jsx-curly-newline": "off", // jsx안에 }를 새로운 라인에 사용할 수 있다.
    "no-use-before-define": "off", // 선언하기 전에 사용할수 없다. 중복
    "@typescript-eslint/no-use-before-define": ["warn"], // 선언하기 전에 사용 한다면 경고
    "no-case-declarations": "off", // case문 안에서 변수 선언 사용하기
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] }, //jsx사용가능한 확장자 설정
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      }, //import 시 확장자명은 사용하지 않는다.
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
```

## styled-component 환경설정 및 사용

```
yarn add styled-components babel-plugin-styled-components
yarn add @types/styled-components -D
```

### styled-component 사용

**className을 이용하여 스타일링 하기**

```
const Container = styled.div`
    width: 100%;

    .todo-list-header{
        padding: 12px;
        border-bottom: 1px solid ${palette.gray};

        .todo-list-last-todo {
            font-size: 14px;
            span{
                margin-left: 8px;
            }
        }
    }
`
//....
  <Container>
      <div className="todo-list-header">
          <p className="todo-list-last-todo">
              남은 TODO<span>{todos.length}개</span>
          </p>
      </div>
  </Container>
```

**태그마다 스타일링 하기**

```
const Container = styled.div`

`

const TodoHeader = styled.div`

`

//...

<Container>
  <TodoHeader>
  </TodoHeader>
</Container>
```

**className을 이용하여서 스타일링하는것이 유지보수 뿐만아니라 코드의 가독성이 좋다**

### vscode-styled-components 설치

### createGlobalStyle

createGlobalStyle의 백틱안에 스타일을 직접 작성하면 포맷팅을 지원하지 않게된다.
styled-components의 css 함수를 이용하면 스타일드 컴포넌트에서 사용할 css값을 변수로 만들어서 사용할수있다.

```
import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const globalStyle = css`
    ${reset};

    *{
        box-sizing: border-box;
    }
    body{
        font-family: Noto Sans, Noto Sans KR;
    }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle}
`


export default GlobalStyle;
```

### styled-reset

```
yarn add styled-reset
```

글로벌 스타일 리셋 하는 다른 방법으로 styled-reset을 사용하여서
reset 시켜주는것이 편하다.

글로벌 스타일안에 추가시켜주면 스타일이 적용된다.

## 아이콘 다운로드 https://iconmonstr.com/

svg 확장자를 사용하는것이 성능이 제일 좋다.
확대 및 축소를 하게되어도 이미지가 깨지지 않기 때문.

## react에서 svg 사용

### babel 플러그인 설치

```
yarn add babel-plugin-inline-react-svg -D
```

### .babelrc 설정 추가

```
{
    "presets" : ["next/babel"],
    "plugins": [["styled-components", {"ssr" : true}, "inline-react-svg"]]
}
```

### types/image.d.ts 파일 설정

```
declare module "*.svg";
```

## Next API

pages/api/todos.ts 라는 파일을 만들게 되면 api/todos가 api의 경로가 된다.

## Redux toolkit

리덕스를 쉽게 작성할수있고 더 나은 리덕스 코드를 작성하기 위한 방법

```
yarn add @reduxjs/toolkit
```

### useSelector

리덕스 스토어의 값을 가져올수있고
타입을 알수없으므로 타입을 가져와서 지정해야한다.

### TypedUseSelectorHook

useSelector에 타입을 지정해서 사용하는 방법.
커스텀 useSelector를 만들수있다.

```
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
```

## React Modal => React Portal 사용

부모 컴포넌트 DOM 계층 외부에 있는 DOM 노드로 자식을 렌더링하는 방법

```
//react Component, Component를 넣을 DOM
ReactDOM.createPortal(child, container)
```

## Next-Redux

```
yarn add redux react-redux next-redux-wrapper redux-devtools-extension
yarn add @types/react-redux -D
```