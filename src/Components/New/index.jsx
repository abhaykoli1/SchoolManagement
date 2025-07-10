import CategoryMenu from "./CategoryMenu";
import Navbar from "./nav";
import TemplateSearch from "./TemplateSearch";
import WhatsNewSlider from "./WhatsNewSlider";

export default function New() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d3f1ff] to-[#ede4ff] text-black px-4 py-6">
      <Navbar />
      <TemplateSearch />
      <CategoryMenu />
      {/* <WhatsNewSlider /> */}
    </div>
  );
}
