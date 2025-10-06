import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";

import './App.css'
const articles = [
  {
    title: "Bihar: NDA vs MGB & the 'PK factor' - who has edge in 'mother of all elections'",
    description: "Bihar gears up for assembly elections, announced by the Election Commission for November 6 and 11. The NDA, led by JD(U) and BJP, faces a united opposition under RJD's Tejashwi Yadav. New entrant Jan Suraaj, led by Prashant Kishor, also aims to contest all 243 seats, setting the stage for a multi-cornered contest.",
    image: "https://static.toiimg.com/thumb/124337922.jpg?imgsize=792912&photoid=124337922&width=600&resizemode=4"
  },
  {
    title: "Can Freudian lessons help India put an end to deadly stampedes?",
    description: "While modern technology can track a crowd in real time, it cannot read its mind. Law-enforcement authorities have to gauge the changing mood of a public gathering to prevent deadly stampedes",
    image: "https://static.toiimg.com/thumb/124342416.jpg?imgsize=293586&photoid=124342416&width=600&resizemode=4"
  },
  {
    title: "H-1B visa fee hike: Why global tech startups outside US are ‘happy’ with new rules",
    description: "New US H-1B visa rules are shifting global tech talent. Companies in the UK and Canada are now attracting skilled engineers. This presents a significant advantage for these international tech hubs. Founders and political leaders recognize this opportunity. Demand for relocation services is surging. This trend is reshaping the landscape for top engineering professionals.",
    image: "https://static.toiimg.com/thumb/124340335.jpg?imgsize=61192&photoid=124340335&width=600&resizemode=4"
  }
];

function App() {
  return (
    <div>
      <Header />
      <Content articles={articles} />
      <Footer />
    </div>
  )
}

export default App
