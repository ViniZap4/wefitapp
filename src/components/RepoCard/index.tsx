import { View } from "react-native";
import { Repository } from "../../../@types/repository";

import { BottomContainer, Container, Description, FavoriteButton, FavoriteButtonText, Header, Icon, LanguageContainer, LanguageText, RedCircle, StarCount, StarCountText, Title } from "./style";
import { MaterialIcons } from '@expo/vector-icons';

import { Line } from "../Line";
import { useTheme } from 'styled-components';


interface Props {
  data: Repository;
} 

export function RepoCard({data}: Props){
  const theme = useTheme();

  return(
    <Container>
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
          <FavoriteButton >
            <MaterialIcons name="star" color={theme.COLOR.PRIMARY} size={18} />
            <FavoriteButtonText> Favoritar </FavoriteButtonText>
          </FavoriteButton>
         
          <StarCount>
            <MaterialIcons name="star" color={theme.COLOR.PRIMARY} size={18} />
            <StarCountText>{data.stargazers_count}</StarCountText>
          </StarCount>
         
          <LanguageContainer>
            <RedCircle />
            <LanguageText>
              {data.language}
            </LanguageText>
          </LanguageContainer>
      </BottomContainer>
    </Container>
  )
}