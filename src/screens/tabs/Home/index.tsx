import { useContext} from "react";
import { Container } from "./styles";

import { HomeContents } from "./HomeContents";
import { UserBottomSeetContext } from "../../../context/UserBottomSeetContext";




export default function  Home(){

  const {UserBottomSheet} = useContext(UserBottomSeetContext)

  return(
    <Container>
      <HomeContents />
      <UserBottomSheet />
    </Container>
  )
}