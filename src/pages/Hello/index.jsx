const Hello = () => {
  return (
    <div className="min-h-[calc(100vh-9rem)] bg-[url(/img/hello-bg.png)] bg-no-repeat bg-cover flex flex-col justify-center content-center gap-20 px-8">
      <section className="flex flex-col justify-center content-center gap-4">
        <p className="text-xl">
          Hi all. I am
        </p>
        <h3 className="text-5xl">
          Guilherme Lacerda Ribeiro
        </h3>
        <p className="text-indigo-500 text-xl">
          {'>'} Software Engineer
        </p>
      </section>
      <section className="flex flex-col justify-center content-center gap-4 text-sm">
        <p className="text-slate-500">
          {'//'} find my profile on GitHub:
        </p>
        <p>
          <span className="text-indigo-500">const </span>
          <span className="text-teal-400">gitHubLink</span>
          <span className="text-slate-200"> = </span>
          <span className="text-red-300">"https://github.com/guilherme-lacerda-ribeiro/"</span>
        </p>
      </section>
    </div>
  );
};

export default Hello;