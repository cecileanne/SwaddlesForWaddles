import React from "react";
import { DonateBtn } from "../../components/ButtonSubmit";
import Navbar from "../../components/Navbar";
import "./style.css";

function About() {
  return (
    <div className="container">
      <Navbar />
      <h1>SWADDLES FOR WADDLES</h1>
      <p className="subtext">About the Issue</p>

      <div className="logo-wrapper">
        <img
          className="mainlogo"
          src={
            process.env.PUBLIC_URL +
            "/assets/images/icons/swaddles_for_waddles_logo.png"
          }
        />
      </div>
      <div className="text-over-imgs">
        <img
          className="penguin"
          src={
            process.env.PUBLIC_URL + "/assets/images/penguins/penguinTest1.jpg"
          }
        />
        <img
          className="oil-spill"
          src={process.env.PUBLIC_URL + "/assets/images/icons/oil-spill.jpg"}
        />
      </div>
      <div className="the-issue">
        <article>
          <p>
            Swaddle for Waddles, a meme generator, allows you to create memes by
            putting a sweater on top of a selected penguin (swaddling it), and
            adding text of your very own! There is no limit to the number of
            memes you can create, and you'll have your own waddle (a group of
            penguins) in no time.
          </p>
          <p>
            It's not only fun and entertaining - by creating and sharing your
            meme, you can raise awareness of environmental issues caused by oil
            spills. Taking inspiration from events near Australia both in 2000
            and 2014, swaddling a penguin in a sweater (or "jumper" as they say
            Down Under) was happening not just virtually. In one of the first
            internet calls to action, conservation groups requested sweaters for
            effected penguins to keep them from ingesting oil while they groomed
            themselves. A knitting pattern was provided, and the groups expected
            just enough for the penguins in their care. The international
            response was overwhelming and they received exponentially more then
            needed. While sweaters are no longer needed today, the idea of
            creating accessories for animals in peril struck a chord and stories
            about not only the spills but the sweater-knitters made news
            world-wide. Australia's oldest man was even knitting!
          </p>
          <p>
            Taking it even further, we offer a proof of concept for a more
            pro-active solution to help real animals. By hypothetically
            partnering with an organization, in this case the World Wildlife
            Fund, users could (again, hypothetically) donate money for clean up
            efforts and care for displaced penguins.
          </p>
          <p>
            Our serious backstory aside, we hope you have fun creating your
            meme! There is something inherently smile-inducing about seeing an
            animal in clothing. Be as silly and creative as you want!
          </p>
        </article>
      </div>
      {/* <div className="footer">
        <h3>
          <Link to="/Donate"> Donate Now!</Link>
        </h3>
      </div> */}
    </div>
  );
}

export default About;
