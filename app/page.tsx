import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { MyProjects } from './components/MyProjects/MyProjects'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <MyProjects />
    </div>
  );
}
