import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex flex-center flex-col">
      <h1 className="head_text text-center">
        Discover And Share <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">Ai Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompt
      </p>


      <Feed />
    </section>
  );
};

export default Home;
