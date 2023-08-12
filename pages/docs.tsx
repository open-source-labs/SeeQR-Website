import NavBar from "@/components/NavBar";

export default function Docs() {
  return (
    <>
      <NavBar />
      <div>
        <iframe
          src="https://master--zippy-naiad-6561d5.netlify.app/docs/intro"
          className="w-screen h-screen"
        ></iframe>
      </div>
    </>
  );
}
