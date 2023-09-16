import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What Projects Have I Done?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Global Master-Data Manager</h5>
                <p>
                Engineered an all-in-one full stack Global Data Manager for TCS iON, automating bi-weekly updates of bank-related data from the Reserve Bank of {`India's`} website, achieving a 6x reduction in labor hours and optimizing operational productivity.                
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Heartbeat</h5>
                <p>
                Formulated and integrated a Concurrent Application Access Blocker application, Heartbeat, preventing duplicate user logins and logging out inactive users by sending heartbeats as a REST API, eliminating 18% of security incidents.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Healthmate</h5>
                <p>
                Led the development of Healthmate, a transformative web application in the fitness industry. Enabled customer-professional engagement, goal tracking, resource access, and program participation; achieved a 40% increase in user engagement.                
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Quick Cafe</h5>
                <p>
                Streamlined the college {`cafeteria's`} food ordering process through a dedicated web application, eliminating long queues and providing a convenient platform for online ordering, payment and real-time notifications which resulted in 40% reduction of manual orders.                
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Uniradar</h5>
                <p>
                Developed UniRadar, a web application that streamlines the global university search by providing personalized recommendations through user-specific filters such as location, ranking, and type, enabling users to find universities that best fit their educational needs.                
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Captcha Service</h5>
                <p>
                Orchestrated the deployment of an in-house Captcha Service for TCS iON, widening its application across 8 different login pages.                
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="separated" />
        <Testimonials />
      </div>
    </section>
  );
};
export default Services;
