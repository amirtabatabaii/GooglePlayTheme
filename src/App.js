import { MainContainer } from "./components/MainContainer";
import { AppsContainer } from "./components/AppsContainer";
import React, { useEffect, useState, Fragment } from "react";

import Media from "react-media";

import { connect, useSelector, useDispatch } from "react-redux";

import axios from "axios";
import { GameAPI } from "./dataUtility";
import { getGameLists } from "./redux/action";

function App() {
  const [GamesRecomendedAndPopular, setGamesRecomendedAndPopular] = useState(
    []
  );
  const [GamesBestSeller, setGamesBestSeller] = useState([]);
  const dispatch = useDispatch();
  const listOfGames = useSelector((state) => state.listOfGames);

  useEffect(() => {
    axios.get(GameAPI).then((res) => {
      if (res.status === 200) dispatch(getGameLists(res.data));
    });
    setGamesRecomendedAndPopular(
      listOfGames.filter((gm) => gm.category === "popularRecommended")
    );
    setGamesBestSeller(
      listOfGames.filter((gm) => gm.category === "best-seller")
    );
  }, []);

  return (
    <>
      <MainContainer>
        <Media
          queries={{
            small: "(max-width: 799px)",
            medium: "(min-width: 800px) and (max-width: 1199px)",
            large: "(min-width: 1200px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && (
                <>
                  <AppsContainer
                    title='Top New games'
                    apps={GamesRecomendedAndPopular}
                    amount={4}
                  />
                  <AppsContainer
                    title='Top Free games'
                    apps={GamesBestSeller}
                    amount={4}
                  />
                </>
              )}
              {matches.medium && (
                <>
                  <AppsContainer
                    title='Top New games'
                    apps={GamesRecomendedAndPopular}
                    amount={6}
                  />
                  <AppsContainer
                    title='Top Free games'
                    apps={GamesBestSeller}
                    amount={6}
                  />
                </>
              )}
              {matches.large && (
                <>
                  <AppsContainer
                    title='Top New games'
                    apps={GamesRecomendedAndPopular}
                    amount={8}
                  />
                  <AppsContainer
                    title='Top Free games'
                    apps={GamesBestSeller}
                    amount={8}
                  />
                </>
              )}
            </Fragment>
          )}
        </Media>
      </MainContainer>
    </>
  );
}

const mapStateToProps = (state) => ({
  listOfGames: state.listOfGames,
});

export default connect(mapStateToProps, {
  getGameLists,
})(App);
