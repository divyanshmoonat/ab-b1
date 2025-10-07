import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Form from "./components/Form";

import "./App.css";
const articles = [
  {
    title:
      "Bihar: NDA vs MGB & the 'PK factor' - who has edge in 'mother of all elections'",
    description: "Bihar gears up for assembly elections",
    image:
      "https://static.toiimg.com/thumb/124337922.jpg?imgsize=792912&photoid=124337922&width=600&resizemode=4",
  },
  {
    title: "Can Freudian lessons help India put an end to deadly stampedes?",
    description:
      "While modern technology can track a crowd in real time, it cannot read its mind. Law-enforcement authorities have to gauge the changing mood of a public gathering to prevent deadly stampedes",
    image:
      "https://static.toiimg.com/thumb/124342416.jpg?imgsize=293586&photoid=124342416&width=600&resizemode=4",
  },
  {
    title:
      "H-1B visa fee hike: Why global tech startups outside US are ‘happy’ with new rules",
    description:
      "New US H-1B visa rules are shifting global tech talent. Companies in the UK and Canada are now attracting skilled engineers. This presents a significant advantage for these international tech hubs. Founders and political leaders recognize this opportunity. Demand for relocation services is surging. This trend is reshaping the landscape for top engineering professionals.",
    image:
      "https://static.toiimg.com/thumb/124340335.jpg?imgsize=61192&photoid=124340335&width=600&resizemode=4",
  },
  {
    title:
      "Tit for tat? Now, TMC claims Tripura office 'attacked by BJP-backed goons' - video",
    description:
      "Tensions flared as TMC accused BJP-backed goons of attacking its Tripura office, hours after BJP alleged TMC workers targeted its MPs and MLAs in West Bengal. The BJP claimed its MLA was attacked while distributing flood relief, drawing condemnation from Prime Minister Modi. West Bengal CM Mamata Banerjee met with an affected BJP MP.",
  },
];

function App() {
  const getData = (data) => {
    console.log("Data received in parent:", data);
  };

  return (
    <div>
      <Timer />
      <Header />
      <Content articles={articles} getData={getData} />
      <Footer />
      <Form />
    </div>
  );
}

export default App;
