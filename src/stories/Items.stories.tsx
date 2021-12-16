import { Meta, Story } from "@storybook/react";
import Items from "../Containers/Items";

export default {
    title: "Item List",
} as Meta;

const ItemFuc: Story = () => (
    <div>
        <Items />
    </div>
);

export const ContainItems = ItemFuc.bind({})