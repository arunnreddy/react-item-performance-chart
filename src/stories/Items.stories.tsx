import { Meta, Story } from "@storybook/react";
import Items from "../Containers/Items";
import { Provider } from "react-redux";
import store from "../Redux/Store";

export default {
    title: "Item List",
} as Meta;

const ItemFuc: Story = () => (
    <div>
        <Provider store={store}>
        <Items />
        </Provider>
    </div>
);

export const ContainItems = ItemFuc.bind({})