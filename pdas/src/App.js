import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title has-text-white">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa"
                image={AlexaImage}
                desc="Alexa was created by Amazon!"
              ></ProfileCard>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="cortana"
                handle="@cortana"
                image={CortanaImage}
                desc="Cortana was created by Microsoft!"
              ></ProfileCard>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri"
                image={SiriImage}
                desc="Siri was created by Apple!"
              ></ProfileCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
