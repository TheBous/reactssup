import React, { FC } from "react"; 
import { ITitleProps } from "./index.d";

const Title: FC<ITitleProps> = ({text}) => <div>{text}</div>

export default Title;
