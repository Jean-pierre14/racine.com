import { skills } from "../../data/data";
const Skills = () => {
  return (
    <>
      {skills.map((item) => (
        <li data-aos="zoom-out-up" data-aos-duration="1500">
          <span>
            <img src={item.icon} alt="Icon" className="img-fluid" />
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </span>
          <small className="text-left flex-1">{item.name}</small>
        </li>
      ))}
    </>
  );
};

export default Skills;
