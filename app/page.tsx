import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { MyProjects } from './components/MyProjects/MyProjects'
import {Service} from '@/app/components/Service/Service'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Service />
      <MyProjects />
      
    </div>
  );
}
