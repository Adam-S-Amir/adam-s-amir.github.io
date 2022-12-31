import React from "react";
import { List, ListSubheader } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import Loader from "../Loader/Loader";

import { useHomebrewStyles } from "./LibraryStyles";
import GameList from "./GameList";
import Game from "./Game";
import spaceInvasionUri from "./homebrew/space-invasion/space-invasion.gb.zip";
import spaceInvasionThumb from "./homebrew/space-invasion/space-invasion.png";
import flappyBoyUri from "./homebrew/flappyboy/flappyboy.gb.zip";
import flappyBoyThumb from "./homebrew/flappyboy/flappyboy.png";
import infinityUri from "./homebrew/infinity/infinity.gb.zip";
import infinityThumb from "./homebrew/infinity/infinity.png";
import postbotUri from "./homebrew/postbot/postbot.gb.zip";
import postbotThumb from "./homebrew/postbot/postbot.png";

const Homebrew = props => {
  const [homebrew, setHomebrew] = React.useState();
  const classes = useHomebrewStyles();

  const load = uri => () => {
    setHomebrew(uri);
  };

  return (
    <Box clone p="0">
      <List
        subheader={
          <ListSubheader className={classes.heading}>
            {`Free Homebrew Games`}
          </ListSubheader>
        }
      >
        <div>
          <GameList>
            <Game
              setCurrentROM={load(spaceInvasionUri)}
              thumb={spaceInvasionThumb}
              title="Pokemon Blue"
            />
            <Game
              setCurrentROM={load(flappyBoyUri)}
              thumb={flappyBoyThumb}
              title="Pokemon Red"
            />
            <Game
              setCurrentROM={load(infinityUri)}
              thumb={infinityThumb}
              title="Pokemon Gold"
            />
            <Game
              setCurrentROM={load(postbotUri)}
              thumb={postbotThumb}
              title="Pokemon Silver"
            />
          </GameList>

          <Loader uri={homebrew} />
        </div>
      </List>
    </Box>
  );
};

export default Homebrew;
