import fack from "../src/assets/fack.png";

const About = () => {
  return (
    <div className="container mt-5 text-center">
      {/* Image */}
      <img
        src={fack} // Replace this with the actual image URL
        alt="Satirical Image"
        className="img-fluid rounded mb-4"
        style={{ maxWidth: "250px", height: "auto" }}
      />

      {/* Text */}
      <h1 className="mb-4">About This Website</h1>
      <p className="lead text-secondary">
        This website is a satire and is purely intended as a joke. It pokes fun
        at the outlandish statement made by Donald Trump, claiming that{" "}
        <a
          href="https://www.nbcnews.com/politics/2024-election/trump-pushes-baseless-claim-immigrants-eating-pets-rcna170537"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          "immigrants are eating the pets."
        </a>
        <br />
        <br />
        None of the content on this site should be taken seriously, and it's
        meant to highlight the absurdity of such claims.
      </p>
    </div>
  );
};

export default About;
