import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { MyProjects } from './components/MyProjects/MyProjects'
import {Service} from '@/app/components/Service/Service'
import { Testimonials } from "@/app/components/Testimonials/Testimonials"
import { ContactUs } from '@/app/components/Contact/ContactUs'
import { Footer } from '@/app/components/Footer/Footer'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Service />
      <MyProjects />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
