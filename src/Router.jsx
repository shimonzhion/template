import { Route, Routes } from "react-router-dom";
import { Home, About, ContactUs, PageNotFound } from "./components/pages";

export default function Router() {

  return (
   <div className="main">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<ContactUs/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  );
}
