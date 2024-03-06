export default function Home() {
  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
        STUDIJŲ DIENYNAS
      </h1>
      <div style={{ textAlign: "center" }}>
        <img
          src="https:www.example.com/image.jpg"
          style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }}
        ></img>
      </div>
      <div className="grid grid-cols-4 mt-4">
        <div className="text-center border border-black p-4 rounded">
          Semestrai
        </div>
        <div className="text-center border border-black p-4 rounded">
          Studijos
        </div>
        <div className="text-center border border-black p-4 rounded">
          Akademinės Formos
        </div>
        <div className="text-center border border-black p-4 rounded">
          Įvykiai ir Renginiai
        </div>
      </div>
    </>
  )
}
