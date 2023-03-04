import Header from "./component/Header";
import Intro from "./component/Intro";
import Testimonials from "./component/Testimonials";
import Gallery from "./component/Gallery";
import Footer from "./component/Footer";
import Section from "./component/Section";
import Box from "./component/box";
import { transform, stand, graphic, photography } from "./seactionsData";

export function App() {
  return (
    <>
      <Header />
      <Intro />
      <Section cls={"transform"} data={transform} />
      <Section cls={"stand"} data={stand} />
      <article className="fruits">
        <Box cls={"graphic"} data={graphic} />
        <Box cls={"photography"} data={photography} />
      </article>
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}
