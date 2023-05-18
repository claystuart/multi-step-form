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
  return (
    <div style={noPageStyle}>
      <h1 style={{fontSize: "60px"}}>404</h1>
      <h2>No Page Found</h2>
    </div>
  )
};

