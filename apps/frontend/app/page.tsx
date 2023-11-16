import Image from "next/image";
import { CaseStudySection, NavBar, WebsiteSearch } from "./components";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className=" h-fit min-h-screen">
        <div>
          <WebsiteSearch />
        </div>
        <div>
          <CaseStudySection />
        </div>
      </div>
    </div>
  );
}
