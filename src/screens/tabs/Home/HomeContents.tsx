import { useContext, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Repository } from "../../../../@types/repository";
import { RepoCard } from "../../../components/RepoCard";
import { UserContext } from "../../../context/UserContext";
import { gitHubApi } from "../../../services/gitHubApi";



export function HomeContents(){
  const {username} = useContext(UserContext)
  const [repositorys, setRepositorys] = useState<Repository[]>([])

  async function getRepositorys(){
    const response = await gitHubApi.get(`/users/${username}/repos`)
    setRepositorys(response.data)
  }
  
  useEffect(()=>{
    getRepositorys()
  },[username])

  if(repositorys.length <= 0 || !repositorys || repositorys === undefined){
    return(
      <Text>
        Esse Usuário ainda não tem repositórios
      </Text>
    )
  }
  return (
    <FlatList
      data={repositorys}
      keyExtractor={item => item.node_id}
      renderItem={({item}) =>(
        <RepoCard 
          data={item}
        />
      )}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
    />
  )
  
}