import configLevels from "../configLevels";

const GetLevelConfig = (parameter) => {

    switch(parameter){
      case "easy":
        return configLevels.EASY;
      case "moderate":
        return configLevels.MODERATE;
      case "difficult":
        return configLevels.DIFFICULT;
      default:
        console.log("Level not selected")
    }
}

export default GetLevelConfig;