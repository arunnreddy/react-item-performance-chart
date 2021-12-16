import { Meta, Story } from "@storybook/react";
import Header from "../Components/Header";

export default {
    title: "Header",
} as Meta;

const HeaderFuc: Story = () => (
    <div>
        <Header />
    </div>
);

export const ContainHeader = HeaderFuc.bind({})