const LogoHeading = ({ src, alt, text }) => {
    return (
      <h2 style={{ display: "flex", alignItems: "center", gap: "10px", alignItems: "center" }}>
        <img src={src} alt={alt} style={{ width: "24px", height: "24px" }} />
        {text}
      </h2>
    );
  };
  
  export default LogoHeading;
  