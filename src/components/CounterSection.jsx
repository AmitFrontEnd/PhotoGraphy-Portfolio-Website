import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const stats = [
  { number: 23, suffix: "+", label: "Years of Experience" },
  { number: 500, suffix: "", label: "Complete Projects" },
  { number: 100, suffix: "+", label: "Employees" },
  { number: 300, suffix: "+", label: "5 Star Rating" },
];

const CounterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-fixed bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-10 grid md:grid-cols-4 gap-10 text-center text-white"
      >
        {stats.map((item, index) => (
          <div key={index} className="space-y-3">
            <h2 className="text-4xl font-bold">
              {inView && <CountUp end={item.number} duration={2} />}
              {item.suffix}
            </h2>

            <p className="uppercase tracking-widest text-sm opacity-80">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
