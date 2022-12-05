import { useContext, useState } from "react";
import { Text} from "react-native";

import { UserBottomSeetContext } from "../../context/UserBottomSeetContext";
import { UserContext } from "../../context/UserContext";
import { gitHubApi } from "../../services/gitHubApi";
import { Container, LabelInput, ButtonContainer, ButtonSave, ButtonCancel, TextButtonCancel,TextButtonSave, InputContainer, UserInput } from "./styles";
import Toast from 'react-native-toast-message';



export default function UserBottomSheetContents(){
  const [userNameInput, setUserNameInput] = useState('');
  const {CloseButtonSheet} = useContext(UserBottomSeetContext)
  const {setUsername} = useContext(UserContext)

  function handleCloseButtonSheet(){
    CloseButtonSheet()
  }

  async function updateUsername(){
    const response = await gitHubApi.get(`/users/vinizap4`)
    setUsername(userNameInput)      
    handleCloseButtonSheet()
    Toast.show({
      type: "success",
      text1: `Selecionando o usuário ${userNameInput} com sucesso!`
    })
  }

  return(
    <Container>
      <Text>Alterar usuátio selecionado</Text>
      
      <InputContainer>
        <LabelInput> Nome do usuário</LabelInput>
        <UserInput
          value={userNameInput}
          onChangeText={(userName) => setUserNameInput(userName)}
          placeholder={'UserName'}
          autoCapitalize='none'
        />
      </InputContainer>
      <ButtonContainer>
        <ButtonCancel onPress={handleCloseButtonSheet}>
          <TextButtonCancel> Cancelar </TextButtonCancel>
        </ButtonCancel>
        
        <ButtonSave onPress={updateUsername}>
          <TextButtonSave> Salvar </TextButtonSave>
        </ButtonSave>
        
      </ButtonContainer>
    </Container>
  )
}