import Section1 from './Componants/Section1/section1'
import Section2 from './Componants/Section2/section2'
import Adi from './Componants/Section1/Aaaaa.jpg'
// import Adit from './Componants/Section1/Anjali.jpg'
// import Adity from './Componants/Section1/anand.jpg'

const App = () => {
let dark;
  const darkMode = () =>
  {
    dark = !dark;
    if(dark)
    {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    else
    {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }

  }

  const users = [
    {
      img: Adi,
      intro: 'I am a Forntend developer',
      color:'royalblue',
      tag: 'Satisfied'
    },
    {
      img: 'https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg',
      color:'lightseagreen',
      intro: '',
      tag: 'Underserved'
    },
    {
      img:'https://www.outfittrends.com/wp-content/uploads/2024/06/IMG_3214-400x600.jpeg.webp' ,
      color:'orange',
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'pink',
      intro: '',
      tag: 'Underwear'
    },
    {
      img:'https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'black',
      tag:'Average'
    }
  ]
  return (
    <div>
    <button onClick={darkMode} className='btn'>Dark&light</button>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App