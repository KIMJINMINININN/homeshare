import css from "styled-jsx/css";
import fetch from "isomorphic-unfetch";

const style = css`
    .profile-box{
        width: 25%;
        max-width: 272px;
        margin-right: 26px;
    }
`
const name = ({ user }) => {
    console.log("name Component");
    if(!user){
        return null;
    }

    return (
        <>
            <div className="profile-box">
                <div className="profile-image-wrapper">
                    <img className="profile-image" src={user.avatar_url} alt={`${user.name} 프로필 이미지`} />
                </div>
                <h2 className="profile-username">{user.name}</h2>
                <p className="profile-user-login">{user.login}</p>
                <p className="profile-user-bio">{user.bio}</p>
            </div>
            <style jsx>{style}</style>
        </>
    )
}

export const getServerSideProps = async ({ query }) => {
    console.log("getServerSideProps");

    const {name} = query;
    try{
        const res = await fetch(`https://api.github.com/users/${name}`);
        if(res.status === 200){
            const user = await res.json();
            return {props: {user}};
        }
        return {props: {}};
    } catch(e) {
        console.log(e);
        return {props:{}};
    }
};

export default name;