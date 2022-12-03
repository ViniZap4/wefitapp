import styled from "styled-components/native";
import { FONT } from "../../styles/components/Font";

export const Container = styled.View`
  margin: 16px 16px;
  gap: 16px;
  padding: 12px 16px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: ${({theme}) => theme.COLOR.BACKGROUND};
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${FONT.FONT_SIZE.MD};
  font-family: ${FONT.FONT_FAMILY.BOLD};
`

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`

export const Description = styled.Text`
  color: ${({theme}) => theme.COLOR.LIGHT_TEXT};
  font-family: ${FONT.FONT_FAMILY.REGULAR};

`

export const BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 12px;
`

export const FavoriteButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px 10px;
  background-color: ${({theme}) => theme.COLOR.PRIMARY_LIGHT};
  border-radius: 4px;
  color: ${({theme}) => theme.COLOR.PRIMARY};
`
export const FavoriteButtonText = styled.Text`
  margin-left: 9px;
  color: ${({theme}) => theme.COLOR.PRIMARY};
`

export const StarCount = styled.View`
  flex-direction: row;
  align-items: center;
`
export const StarCountText = styled.Text`
  margin-left: 6px;
  font-family: ${FONT.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLOR.TEXT};
`

export const LanguageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const RedCircle = styled.View`
  height: 9px;
  width: 9px;
  background-color: red;
  border-radius: 50px;
`

export const LanguageText = styled.Text`
  margin-left: 6px;
  font-family: ${FONT.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLOR.TEXT};
`