import { useState } from 'react';
import GithubLogo from '../src/assets/download.png';
import ItemContainer from './Components/Repository';
import { Container } from './Styles';
import Button from './Components/button';
import { api } from './GithubServices/api';

import Input from './Components/Input'


function App() {
  
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if (data.id) {
      setRepos(prev => [...prev, data]);
    }
  }

  return (
    <>
      <Container>
        <img src={GithubLogo} alt="" width={72} height={72} />
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo} />
        {repos.map(repo => <ItemContainer repo={repo} /> )}
        
      </Container>
      
    </>
  )
}

// https://api.github.com/repos/luckfer7/organo

export default App
