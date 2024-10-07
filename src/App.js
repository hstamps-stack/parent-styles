import ProfileCard from "./ProfileCard";
import SarahProfileImage from './images/sarah.jpeg';
import LivProfileImage from './images/liv.jpeg';
import JerryProfileImage from './images/jerry.webp';

import 'bulma/css/bulma.css';

function App(){
  return(
    <div>

      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
          <div>Parenting Bios</div>
          </p>
        </div>
      </section>
      

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard firstName="Jerry" 
              handle ="@jerry/instagram" 
              image={JerryProfileImage}
              description="Fathers are important and I am here to help young fathers with advice."
              />
            </div>
            <div className="column is-4">
              <ProfileCard firstName="Sarah" 
              handle ="@sarah/instagram" 
              image={SarahProfileImage}
              description="I am here to help/ be helped with parenting as our kids are the future."
              />
            </div>
              
            <div className="column is-4">
              <ProfileCard firstName="Liv" 
              handle ="@Liv/instagram" 
              image={LivProfileImage}
              description="Any parent need of resources? I can help aid in this process"
              />
            </div>
              
          </div>
        </section>
      </div>       
    </div>
  )
}

export default App;