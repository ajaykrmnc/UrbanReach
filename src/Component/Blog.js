import Card from "./Card";
import ContactUs from "./Contactus";
import Footer from "./Footer";
import { obj } from "./Object";

const Blog = () => {
  return (
    <>
      <div className="container" style={{paddingBottom: '7%'}}>
        <h1 className="text-center text-success mt-4">Our Blog</h1>
        <h3 className="text-center p-3">
          Sharing some knowledge about our industry
        </h3>
        <div class="row">
          {Object.values(obj).map((e) => (
            <div className="col-xl-4 col-xs-12" style={{border: "1px solid #EEEEEE"}}>
              <Card details={e} image={e.image} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
