// I didn't actually add React to the package.json, so please ignore your IDE's
// warnings if they appear. Prettier still formats without it.

export default function Example() {
  const a = "size-12"
  const b = "border border-black"

  return (
    <>
      <div className={a + " p-4 " + b}></div>
      <div className={`${a} p-4 ${b}`}></div>
    </>
  )
}
