import { View } from "react-native";
import { Repository } from "../../../@types/repository";

import { BottomContainer, Container, Description, FavoriteButton, FavoriteButtonText, Header, Icon, LanguageContainer, LanguageText, RedCircle, StarCount, StarCountText, Title } from "./style";
import { MaterialIcons } from '@expo/vector-icons';

import { Line } from "../Line";
import { useTheme } from 'styled-components';
import { useFocusEffect, useLinkProps, useNavigation, useNavigationState } from "@react-navigation/native";
import { addRepositoryStorage, checkRepositoryStorage } from "../../utils/favoritesStorage";
import { useCallback, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";


interface Props {
  data: Repository;
} 

export function RepoCard({data}: Props){
  const [favorited, setFavorited] = useState(true)
  const screenName = useNavigationState((state) => state.routes[state.index].name)

  const navigation = useNavigation()

  const theme = useTheme();

  function setFavorite(){
    addRepositoryStorage(data)
    checkRepository();
  } 

  

  function openDetails(){
    navigation.navigate("Details", data);
  } 

   async function checkRepository() {
    const check = await checkRepositoryStorage(data.node_id)
    setFavorited(check)
  }


  useFocusEffect(useCallback(() => {
    checkRepository();
  }, []));
  
  

  if(favorited && screenName === "Repository"){
    return <></>
  }
  
  return(
    <Container onPress={openDetails}>
      <Header>
        <Title>
          {data.full_name}
        </Title>
        <Icon  source={{uri:data.owner.avatar_url}} />
      </Header>

      <Line />

      <View>
        <Description>
          {!data.description? "Não há descrição." : data.description} 
        </Description>
      </View>
      <BottomContainer>
        {screenName === "Repository"?(
          <FavoriteButton onPress={setFavorite}>
            <MaterialIcons name="star" color={theme.COLOR.PRIMARY} size={18} />
            <FavoriteButtonText> Favoritar </FavoriteButtonText>
          </FavoriteButton>
        ):<></>}

        
        <StarCount>
          <MaterialIcons name="star" color={theme.COLOR.PRIMARY} size={18} />
          <StarCountText>{data.stargazers_count}</StarCountText>
        </StarCount>
        
        <LanguageContainer>
          <RedCircle />
          <LanguageText>
            {!data.language? "Linguagem não informada." : data.language} 
          </LanguageText>
        </LanguageContainer>
      </BottomContainer>
    </Container>
  )
}