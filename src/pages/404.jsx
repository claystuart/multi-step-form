export default function NoPage() {
  let noPageStyle = {
    width: 343,
    height: 367,
    background: "white",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }

  let messageStyle = {
    marginTop: 10,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 20,
    color: "var(--denim)",
    letterSpacing: 1.5
  }
  return (
    <div style={noPageStyle}>
      <h1 style={{ fontSize: "60px" }}>404</h1>
      <h2 style={messageStyle}>No Page Found</h2>
    </div>
  )
};

