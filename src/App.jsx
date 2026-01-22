import { useState } from 'react'

import AppArticle from './components/AppArticle'

const originalArticles = [
  'Come fare la pasta',
  'Come fare la spesa',
];

function App() {
  console.log("Rendering di App.jsx")
  const [articles, setArticles] = useState(originalArticles)
  const [newPost, setNewPost] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setArticles([ ...articles, newPost ]);
    setNewPost("");
  } 

  return (
    <>
    <div>
    {
      articles.map( (article, i) => <AppArticle key={i} title={article} /> )
    }
    <form onSubmit={handleSubmit}>
      <input type="text" value={newPost} onChange={(e) => setNewPost(e.target.value)} />
      <input type="submit" value="aggiungi nuovo post" />
    </form>
    <AppArticle title="PROVA TITOLO" />
    </div>
    </>
  )
}

export default App
