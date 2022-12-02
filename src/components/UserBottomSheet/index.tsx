import { useContext, useState } from "react";
import { Text, View, TextInput, TouchableOpacity} from "react-native";
//import { TextInput } from "react-native-gesture-handler";
import { UserBottomSeetContext } from "../../context/UserBottomSeetContext";
import { UserContext } from "../../context/UserContext";
import { Container, LabelInput, ButtonContainer, ButtonSave, ButtonCancel, TextButtonCancel,TextButtonSave, InputContainer, UserInput } from "./styles";



export default function UserBottomSheetContents(){
  const [userName, setUserName] = useState('');
  const {CloseButtonSheet} = useContext(UserBottomSeetContext)
  const {setUsername} = useContext(UserContext)

  function handleCloseButtonSheet(){
    CloseButtonSheet()
  }

  function updateUsername(){
    fetch(`https://api.github.com/users/${userName}`)
    .then(response => {
      if (response.status === 404){
        alert("Não foi possível encontrar esse usuátio")
        return;
      }

      setUsername(userName)
      handleCloseButtonSheet()

    })

  }

  return(
    <Container>
      <Text>Alterar usuátio selecionado</Text>
      
      <InputContainer>
        <LabelInput> Nome do usuário</LabelInput>
        <UserInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
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