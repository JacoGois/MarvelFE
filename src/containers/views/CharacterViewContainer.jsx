import { useState } from "react";
import { View } from "../../components/View";
import { CharacterHeadline } from "../../components/CharacterHeadline";

export const CharacterViewContainer = () => {
  const [character, setCharacter] = useState({});
  var id = window.location.href.split("/")[4]

  return (
    <View>
      <CharacterHeadline {...character} />
    </View>
  );
};
