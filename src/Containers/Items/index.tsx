import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  Fragment,
} from "react";
import { Container } from "react-bootstrap";
import "./style.scss";
import TutorialDataService from "../../Api/ApiCall";
import ItemListGrid from "../../Components/ItemListGrid";

const Items: React.FC = () => {
  const [movieCategories, setMovieCategories] = useState<any[]>([]);
  const [getScreenWidth, setGetScreenWidth] = useState<number>(
    window.innerWidth
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, [getScreenWidth]);

  const handleResize = () => {
    setGetScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  const getCategoriesData = () => {
    TutorialDataService.getAll().then(res => {
      console.log('Response data ==> ', res.data);
      setMovieCategories(res.data)
    }).catch(err => {
      console.log('Error  ==> ', err);
    });
  };

  return (
    <Fragment>
      <div className="body-container" style={{ width: getScreenWidth }}>
        <Container>
          <h4 className="movieList-header">New Release Items</h4>

          <ItemListGrid movieCategories={movieCategories} />

        </Container>
      </div>
    </Fragment>
  );
};

export default Items;
