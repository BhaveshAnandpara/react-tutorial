import logo from './logo.svg';
import './App.css';
import Card from './component/Card';

function App() {

  const carddata = [
    {title:"title1", body:"body1"},
    {title:"title2", body:"body2"},
    {title:"title3", body:"body3"},
    {title:"title4", body:"body4"},
  ]

  return (
    <>
      {
        carddata.map((data)=>{
           return <Card  title={data.title}  body={data.body} />
        })
      }
    </>

  );
}

export default App;
