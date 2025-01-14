import Authorcard from "@/components/ui/AuthorCard";
import Feature from "@/components/ui/Feature";
import Footer from "@/components/Footer";
import Mega from "@/components/ui/Mega";
import NavBar from "@/components/Navbar";
export default function Home() {
  return (
    <div>
      <h1 className="text-white text-4xl font-bold bg-slate-500">DevDiary</h1>
      <NavBar />
      <Authorcard />
      <Feature />
      <Mega />

      {/* <Footer /> */}
    </div>
  );
}

