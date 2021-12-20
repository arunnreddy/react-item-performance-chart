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
import { ItemInputSearchBox } from "../../Components/ItemInputSearchBox";
import SearchBarItemList from "../../Components/SearchBarItemList";
import { ITodo } from "../../Api/Type";
import { useDispatch, useSelector } from "react-redux";
import RootReducer from "../../Redux/Reducer";

const Items: React.FC = () => {
  const [Categories, setCategories] = useState<any[]>([]);
  const [CategoryItems, setCategoryItems] = useState<any[]>([]);
  const [searchCategoryItems, setsearchCategoryItems] = useState<any[]>([]);
  const [getScreenWidth, setGetScreenWidth] = useState<number>(window.innerWidth);
  const [IsSearchValue, setIsSearchValue] = useState<boolean>(false);
  const [SearchInputValue, setSearchInputValue] = useState<string>('');

  const ProductReducer = useSelector((state : any) => state.Product)

  useEffect(() => {    
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, [getScreenWidth]);

  const handleResize = () => {
    setGetScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // getCategoriesData();
    console.log('ProductReducer   ===> ',ProductReducer.products.todos);
    setCategories(ProductReducer.products.todos);
      setCategoryItems(ProductReducer.products.todos);
  }, [ProductReducer.products.todos]);

  const getCategoriesData = () => {
    TutorialDataService.getAll().then((res: ITodo) => {
      console.log('Response data ==> ', res.data);
      setCategories(res.data);
      setCategoryItems(res.data);
    }).catch(err => {
      console.log('Error  ==> ', err);
    });
  };

  const handleInput = (val: string) => {
    let cetagories = Categories.filter(item => {
      if (item.title.toLowerCase().match(val.toLowerCase())) {
        return item;
      }
    });
    // console.log('cetagories  ==> ', cetagories);
    setsearchCategoryItems(cetagories);
    if ((cetagories.length > 0) && val) {
      setIsSearchValue(true)
    } else {
      setIsSearchValue(false)
    }
  }

  const handleSelectItem = (item: any) => {
    // console.log('item  ===>  ', item);
    setCategoryItems([item]);
    setIsSearchValue(false);
    setsearchCategoryItems([]);
    setSearchInputValue(item.title);
  }

  const handleClose = (str: string) => {
    setCategoryItems(Categories);
    setIsSearchValue(false);
    setsearchCategoryItems([]);
    setSearchInputValue('');
  }

  return (
    <Fragment>
      <div className="body-container" style={{ width: getScreenWidth }}>
        <Container>
          <h4 className="movieList-header">New Release Items</h4>
          <ItemInputSearchBox CategoryItems={Categories} handleInputValue={(val) => handleInput(val)} handleClose={(e) => handleClose(e)} SearchInputValue={SearchInputValue} />
          <SearchBarItemList IsSearchValue={IsSearchValue} searchCetagoryList={searchCategoryItems} handleSelectItem={(item) => handleSelectItem(item)} />
          <ItemListGrid movieCategories={CategoryItems} />
        </Container>
      </div>
    </Fragment>
  );
};

export default Items;
