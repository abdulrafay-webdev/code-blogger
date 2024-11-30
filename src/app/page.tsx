import Blogs from "../../components/Blogs";
import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar";


export default function Home() {
  return (
    <div>
      <div className="w-full min-h-[90vh]">
      <Blogs/>
      </div>
    </div>
  );
}
