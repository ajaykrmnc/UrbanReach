import img from "./pic/ur.jpg";
import img1 from "./pic/ur1.png";
import img2 from "./pic/farming.jpg";
import img3 from "./pic/fof.jpg";
import img4 from "./pic/sad farmer.jpg";
import img5 from "./pic/hap farmer.jpg";
import news from "./pic/newspaper.jpg";


export const obj = {
  ob1: {
    image: news,
    title: "IIT-ISM student launches a farm produce supply start-up",
    page: "Blog1",
    content:
      "A final year B. Tech Computer Science Engineering student of IIT-ISM, Sanjeet Kumar, has launched a start-up that provides fresh farm produce at his hometown in Arrah, Bihar.",
    link: "telegraphindia.com/jharkhand/iit-ism-student-launches-a-farm-produce-supply-start-up/cid/1820410",
  },
  ob2: {
    image: img2,
    title:
      "Biodynamic farming as a resource for sustainability transformations",
    page: "Blog2",
    content:
      "Biodynamic farming is compatible with holistic and pragmatic research approaches aiming for “actionable knowledge.",
    link: "sciencedirect.com/science/article/abs/pii/S0308521X22000609",
  },
  ob3: {
    image: img3,
    title: "The Future of Farming",
    page: "Blog3",
    content:
      "The pressure on land is an outcome of policy, which condemns most people to marginal farming. India needs a different set of solutions for agriculture and for those working the land.Demand for fruits and vegetables, dairy products, fish and meat is going to increase in future",
    link: "theindiaforum.in/article/india-s-biggest-challenge-future-farming",
  },
};


export const Problem = () => {
  return (
    <div>
      <div style={{width: "50px", borderRadius: '50%', height: '50px', backgroundColor: 'green'}}>
      <img src={img5} class="card-img-top" alt="..." style={{height: "30px", width: '30px' ,marginTop: '10px' }} />
      </div>
      <h3 style={{color: "green",fontWeight: 'bold',textAlign: 'left'}}> The Problem</h3>
      <div class="card-body" style={{textAlign: 'left'}}>
        <ul>
          <li>
            Farmers experience price risk, information asymmetry about demand,
            distribution inefficiency, and receive late payments.
          </li>
          <li>
            Retailers face problems like higher costs, low quality and
            unhygienic produce, high price volatility, and the everyday hassle
            of going to the market.
          </li>
          <li>
            The traditional Supply Chain is highly inefficient, unorganized, and
            has a high rate of food wastage.
          </li>
        </ul>
      </div>
    </div>
  );
};
export const Solution = () => {
  return (
    <div >
      <div style={{width: "50px", borderRadius: '50%', height: '50px', backgroundColor: 'green',  marginBottom:"10px", marginLeft: '10px'}}>
      <img src={img5} class="card-img-top" alt="..." style={{height: "30px", width: '30px' ,marginTop: '10px' }} />
      </div>
      <h3 style={{color: "green",fontWeight: 'bold',textAlign: 'left'}}> Our Solution</h3>
      <div class="card-body" style={{textAlign: 'left'}}>
        <ul>
          <li>
            We eliminate intermediaries by taking control of the Supply Chain by
            using technology and analytics.
          </li>
          <li>
            We build reliable, cost-effective, and high-speed logistics and
            infrastructure to solve for inefficiencies in the Supply Chain.
          </li>
          <li>
            On one end, farmers get better prices and consistent demand, and on
            the other end, retailers receive fresh produce at competitive prices
            that are delivered to their doorstep.
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Paragraph = () => {
  return (
    <div className="container" style={{textAlign: 'left',width: '60%vw'}}>
      <p className="text-darkgray" style={{color: "gray"}}>
        Urban Reach is India's largest fresh produce supply chain company that
        is solving one of the toughest problems in the world through technology.
      </p>
      <p className="text-gray" style={{color: "gray"}}>
        We connect producers of food directly with retailers, restaurants, and
        service providers using in-house applications that drive end to end
        operations. we are ready to provide services to consumer 24*7.
      </p>
    </div>
  );
};
