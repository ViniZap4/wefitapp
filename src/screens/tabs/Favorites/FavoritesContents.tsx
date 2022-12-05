import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useContext, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Repository } from "../../../../@types/repository";
import { RepoCard } from "../../../components/RepoCard";
import { UserContext } from "../../../context/UserContext";


export function FavoritesContents(){
  const {username} = useContext(UserContext)
  const [repositorys, setRepositorys] = useState<Repository[]>([])
  const { getItem, setItem } = useAsyncStorage("@wefitapp:repositorys");


  async function getRepositorys() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setRepositorys(data);
  }

  useFocusEffect(useCallback(() => {
    getRepositorys();
  }, [username]));
  


  if(repositorys.length <= 0 || !repositorys || repositorys === undefined){
    return(
      <Text>
        Não há Repositório favoridados
      </Text>
    )
  }
  return (
    <FlatList
      style={{width: '100%'}}
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