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

