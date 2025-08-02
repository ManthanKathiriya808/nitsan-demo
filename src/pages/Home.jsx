
import Layout from '../components/Layout/Layout'
import Hero from '../components/HeroSection/Hero'
import Services from '../components/services/Services'
import Card from '../components/Card/Card'
import Tshiva from '../components/Tshiva/Tshiva'
import Count from '../components/count/Count'
import Videos from '../components/videos/Videos'
import Templates from '../components/Templates/Templates'
import Packed from '../components/packed/Packed'
import News from '../components/News/News'
const Home = () => {

  return (
    <div>
      
        <Layout>
            <Hero/>
            <Services/>
            <Card />
            <Tshiva/>
            <Count/>
            <Videos />
            <Templates/>
            <Packed/>
            <News/>
        </Layout>
    </div>
  )
}

export default Home
