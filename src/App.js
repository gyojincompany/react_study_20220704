import './App.css';

function Header(props) {  
  console.log('props', props, props.title);
  return (
    <header>
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault();
        props.onClickMode();
      }}>{props.title}</a></h1>    
    </header>
  );
}

function Nav(props) {
  const list = []

  for(let i=0;i<props.topics.length;i++) {
    let dto = props.topics[i];
    list.push(<li key={dto.id}><a href={'/'+dto.id}>{dto.title}</a></li>)
  }
  
  return(
    <nav>
      <ol>
        {list}
        {/* <li><a href='/1'>html</a></li>
        <li><a href='/2'>css</a></li>
        <li><a href='/3'>javascript</a></li> */}
      </ol>
    </nav>
  );
}

function Article(props) {
  console.log('props', props, props.title);
  return(
    <article>
      <h2>{props.title}</h2>
      {props.body}      
    </article>
  );
}


function App() {
  const topics = [
    {id:1, title:"html", body:"html is Good!"},
    {id:2, title:"css", body:"css is Good!"},
    {id:3, title:"javascript", body:"javascript is Good!"}
  ]


  return (
    <div>
      <Header title="React!!" onClickMode={()=>{alert('React is Good!!')}}></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, React"></Article>      
    </div>
  );
}

export default App;
