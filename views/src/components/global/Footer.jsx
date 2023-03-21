import Contact from "../UI/contact/Contact";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="grid">
          <div className="element-1 one">
            <h1>Les reseaux sociaux</h1>
            {/* <ul className="list">
              <li className="item">
                <a href="#">Facebook</a>
              </li>
              <li className="item">
                <a href="#">Facebook</a>
              </li>
              <li className="item">
                <a href="#">Facebook</a>
              </li>
              <li className="item">
                <a href="#">Facebook</a>
              </li>
            </ul> */}
          </div>
          <div className="element-1 two">
            <h1>Two</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              porro repellendus blanditiis minima non, pariatur officia
              molestiae sapiente ullam recusandae maxime natus quidem nemo
              veritatis atque suscipit ea excepturi ab! Sit animi repellat quos
              amet, quam, voluptatem aut deserunt quo sed temporibus autem
              praesentium quasi culpa eum aliquid id! Quibusdam quos cum eaque,
              aspernatur sint ex! Veritatis debitis suscipit voluptates quos
              dignissimos, enim quisquam soluta quibusdam nemo excepturi
              cupiditate optio quas mollitia minima veniam in obcaecati dolorum
              sit tempore est eum corrupti modi delectus! Deleniti quaerat
              inventore quia similique, ipsam doloribus velit reprehenderit amet
              sapiente minima quod repellat aliquam ullam!
            </p>
          </div>
          <div className="element-1 tree">
            <h1>Contact Us</h1>
            <Contact />
          </div>
        </div>
        <p className="center">copyright &copy; 2023</p>
      </div>
    </>
  );
};

export default Footer;
