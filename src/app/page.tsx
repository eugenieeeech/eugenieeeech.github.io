
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-tr to-blue-400 from-green-100 p-10">
      <div className="w-max">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-4xl sm:text-5xl text-white font-bold">
          Welcome! Get Ready to know about Me...
        </h1>  
      </div>
      <Button variant="primary" className="mt-10 rounded-lg h-16 w-32 shadow-lg" href="/about">About Me</Button>
    </div>
  );
}
