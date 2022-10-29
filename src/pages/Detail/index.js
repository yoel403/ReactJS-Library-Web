import React, { useEffect, useState } from "react";
import Buatdetail from "../../layout/Buatdetail";
import card from "../../assets/card2.png"
import dilan from "../../assets/detail1.png"
import { useParams } from "react-router-dom";
import {books} from "../../Data/index"

const Detailtab = () => {
  const {bookId} = useParams();
  const [book] = useState(books[bookId-1]);

    return (
          <div>
              <Buatdetail
              coverbook = {book.coverbook}
              bodynovel={book.bodynovel}
              bodytitle={book.bodytitle}
              dates={book.dates}
              description = {book.description}
              background= {book.background}
            />;
          </div>
    );
  };

  export default Detailtab