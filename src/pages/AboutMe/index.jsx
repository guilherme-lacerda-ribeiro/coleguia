import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";

const AboutMe = () => {
  return (
    <>
      <h2 className="px-7 py-5 text-slate-300">_about-me</h2>
      <div id='about-me__wrapper' className="flex flex-col gap-1">
        <section className="bg-slate-700 pt-3">
          <PersonalInfo />
        </section>
        <section className="bg-slate-700 pt-3">
          <ProfessionalInfo />
        </section>
      </div>
    </>
  );
};

export default AboutMe;