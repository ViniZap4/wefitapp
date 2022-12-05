import { useContext, useState } from "react";
import { Text} from "react-native";

import { UserBottomSeetContext } from "../../context/UserBottomSeetContext";
import { UserContext } from "../../context/UserContext";
import { gitHubApi } from "../../services/gitHubApi";
import { Container, LabelInput, ButtonContainer, ButtonSave, ButtonCancel, TextButtonCancel,TextButtonSave, InputContainer, UserInput } from "./styles";
//import Toast from 'react-native-toast-message';



export default function UserBottomSheetContents(){
  const [userNameInput, setUserNameInput] = useState('');
  const {CloseButtonSheet} = useContext(UserBottomSeetContext)
  const {setUsername} = useContext(UserContext)

  function handleCloseButtonSheet(){
    CloseButtonSheet()
  }

  async function updateUsername(){
    await gitHubApi.get(`/users/${userNameInput}`)
    .then(response => {
      setUsername(userNameInput)
      handleCloseButtonSheet()
      alert(`Selecionando o usuário ${response.data.login} com sucesso! `)
    }).catch(error => {
      alert("não foi possível atualizar")

    })
  
 }

  return(
    <Container>
      <Text>Alterar usuátio selecionado</Text>
      
      <InputContainer>
        <LabelInput> Nome do usuário</LabelInput>
        <UserInput
          value={userNameInput.replace(/\s/g, '')}
          onChangeText={(userName) => setUserNameInput(userName.replace(/\s/g, ''))}
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