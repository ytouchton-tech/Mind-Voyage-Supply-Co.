export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#f6eedc",
        color: "#111827",
        fontFamily: "Georgia, 'Times New Roman', serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        margin: 0,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)", marginBottom: "6px" }}>
        MIND VOYAGE SUPPLY CO.
      </h1>
      <div style={{ letterSpacing: "0.22em", fontSize: "12px", marginBottom: "24px" }}>
        GET INOCK’D UP
      </div>
      <h2 style={{ fontSize: "clamp(18px, 3vw, 28px)", marginBottom: "12px" }}>
        Ready-to-use mushroom grow bags for easy home cultivation.
      </h2>
      <p style={{ color: "#374151", maxWidth: "700px", margin: "0 0 24px" }}>
        We supply the bags and gear so you can inoculate and harvest with less guesswork.
      </p>
      <div>
        <a
          href="#shop"
          style={{
            display: "inline-block",
            padding: "12px 18px",
            borderRadius: "12px",
            fontWeight: "600",
            margin: "0 8px",
            textDecoration: "none",
            background: "#111827",
            color: "#fff",
          }}
        >
          Shop Grow Bags
        </a>
        <a
          href="#how"
          style={{
            display: "inline-block",
            padding: "12px 18px",
            borderRadius: "12px",
            fontWeight: "600",
            margin: "0 8px",
            textDecoration: "none",
            border: "1px solid rgba(0, 0, 0, 0.15)",
            color: "#111827",
          }}
        >
          How It Works
        </a>
      </div>
      <small style={{ color: "#6b7280", marginTop: "20px" }}>
        © 2025 Mind Voyage Supply Co. • Supplies only
      </small>
    </div>
  );
}
