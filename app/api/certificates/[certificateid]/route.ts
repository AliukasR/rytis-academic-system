export async function PUT(request: NextRequest) {
  const res: ICertificate = await request.json()

  const myCertificate = myDB.certificates

  const index = myCertificate.findIndex((i) => i.id === res.id)

  if (index === -1)
    return Response.json({ message: "Nepavyko pakeisti duomenų" })

  myCertificates.splice(index, 1, res)
  return Response.json({ message: "Pakeitimas sėkmingai įvykdytas" })
}
