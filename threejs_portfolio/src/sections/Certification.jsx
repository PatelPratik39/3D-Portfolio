import { certificationsData } from "../constants";

const Certifications = () => {
  return (
    <section className="c-space my-20 " id="certificates">
      <h3 className="head-text">Certifications</h3>

      <div className="client-container">
        {certificationsData.map((item) => (
          <div key={`cert-${item.id}`} className="client-review">
            <div className="flex gap-3 items-center mb-4">
              <img src={item.icon} alt={item.name} className="w-12 h-12" />
              <div className="flex flex-col">
                <p className="font-semibold text-white-800">{item.name}</p>
                <p className="text-white-500 md:text-base text-sm font-light">
                  {item.org} &mdash; {item.date}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline mt-2 inline-block"
                  >
                    Verify Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
