import { useContext, useState } from "react";
import { Text} from "react-native";
//import { TextInput } from "react-native-gesture-handler";
import { UserBottomSeetContext } from "../../context/UserBottomSeetContext";
import { UserContext } from "../../context/UserContext";
import { gitHubApi } from "../../services/gitHubApi";
import { Container, LabelInput, ButtonContainer, ButtonSave, ButtonCancel, TextButtonCancel,TextButtonSave, InputContainer, UserInput } from "./styles";



export default function UserBottomSheetContents(){
  const [userNameInput, setUserNameInput] = useState('');
  const {CloseButtonSheet} = useContext(UserBottomSeetContext)
  const {username,setUsername} = useContext(UserContext)

  function handleCloseButtonSheet(){
    CloseButtonSheet()
  }

  async function updateUsername(){
    const response = await gitHubApi.get(`/users/vinizap4`)
    alert(response.status)
    setUsername(userNameInput)      
    handleCloseButtonSheet()
    //alert("updated" + response.data.login)

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