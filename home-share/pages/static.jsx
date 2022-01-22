const staticPage = ({time}) => {
    return <div>{time}</div>;
}

export const getStaticProps =  async () => {
    return {props: {time: new Date().toISOString()}, revalidate: 5};
};

export default staticPage;

