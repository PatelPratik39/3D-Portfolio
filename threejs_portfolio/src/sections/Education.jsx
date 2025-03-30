import { educationData } from "../constants";

const Education = () => {
  return (
    <section className="c-space my-20" id="education">
      <h3 className="head-text">Education</h3>

      <div className="client-container">
        {educationData.map((item) => (
          <div key={`edu-${item.id}`} className="client-review">
            <div className="flex gap-3 items-center mb-4">
              <img src={item.icon} alt={item.school} className="w-12 h-12" />
              <div className="flex flex-col">
                <p className="font-semibold text-white-800">{item.degree}</p>
                <p className="text-white-500 md:text-base text-sm font-light">
                  {item.school} &mdash; {item.duration}
                </p>
              </div>
            </div>
            <p className="text-white-800 font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
