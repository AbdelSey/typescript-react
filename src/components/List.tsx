import { number, string } from "prop-types";
import React from "react";

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const List: React.FC<IProps> = (props: IProps) => {
  return <div>List</div>;
};

export default List;
