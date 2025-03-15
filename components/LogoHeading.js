const LogoHeading = ({ src, alt, text }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img src={src} alt={alt} style={{ width: "24px", height: "24px" }} />
      <h2 style={{ margin: 0 }}>{text}</h2>
    </div>
  );
};

export default LogoHeading;
