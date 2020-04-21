import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";
import Button from "./Button";
function Cart() {
  const storeItems = useSelector(getStoreItemArray);

  return (
    <ItemWrapper>
      <OrderList>
        <Title>Your Cart Bruh</Title>
        <div>
          {" "}
          {storeItems.length} {storeItems.length === 1 ? "Item" : "Items"}
        </div>
        {storeItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </OrderList>
      <Button>
        Purchase: {storeItems.length}{" "}
        {storeItems.length === 1 ? "Item" : "Items"}
      </Button>
    </ItemWrapper>
  );
}

const Title = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

const OrderList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  padding-top: 32px;
`;

const ItemWrapper = styled.section`
  position: sticky;
  top: 0;
  min-width: 100%;
  height: 100%;
  background: #401f43;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Cart;
