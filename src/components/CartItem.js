import React from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { x } from "react-icons-kit/feather/x";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../actions";
import { updateQuantity } from "../actions";
import UnstyledButton from "./UnstyledButton";
function CartItem({ item }) {
  const dispatch = useDispatch();
  console.log(item);
  const checkQuantity = useSelector((state) => state[item.id].quantity);
  return (
    <ItemWrapper>
      <Top>
        <Header>Item: {item.title}</Header>
        <CloseBtn onClick={() => dispatch(removeItem(item.id))}>
          <Icon icon={x} />
        </CloseBtn>
      </Top>

      <Main>
        <div>Quantity: {item.quantity}</div>
        <input
          value={checkQuantity}
          onChange={(ev) => dispatch(updateQuantity(item.id, ev.target.value))}
        ></input>
      </Main>
    </ItemWrapper>
  );
}

const Top = styled.div`
  display: flex;
`;

const Main = styled.div`
  font-size: 17px;
  color: #ccc;
  background: rgba(0, 0, 0, 0.25);
  padding: 8px 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 21px;
  font-weight: 500;
  padding: 8px 16px;
`;

const CloseBtn = styled(UnstyledButton)`
  padding: 8px 0px;
`;

const ItemWrapper = styled.div`
  border: 2px dashed white;
  color: white;
  margin: 20px;
`;
export default CartItem;
