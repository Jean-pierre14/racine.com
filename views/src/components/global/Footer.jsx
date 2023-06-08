import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.footer} container-fluid bg-dark text-white`}>
      <div className="container p-5">
        <p className="text-center">
          Racine14Creator Copyright &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
