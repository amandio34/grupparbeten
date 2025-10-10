// Description: This component is used to display an image with a specific style for the Easter egg hunt page. 
export default function EasterImage({ src, alt }) {
    return (
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: "100%",
          borderRadius: "1rem",
          marginBottom: "1rem"
        }}
      />
    );
  }
  