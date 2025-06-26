import Counter from "@/components/Counter";

export default function Home(){
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Kanban Board Project</h1>

      <div className="mb-8">
        <h2 className="txt-2xl font-semibold mb-4">React Counter Demo</h2>
        <Counter initial={0}/>
      </div>

      <p className="text-lg">
        This is the home page of our Kanban board application. Visit{" "}
        <a href="/about" className="text-blue-500 hover:underline">
        /about
        </a>{" "}
        to see the Shadcn Button demo.
      </p>
    </div>
  );
}